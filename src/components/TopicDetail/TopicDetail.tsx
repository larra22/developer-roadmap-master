import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useKeydown } from '../../hooks/use-keydown';
import { useLoadTopic } from '../../hooks/use-load-topic';
import { useOutsideClick } from '../../hooks/use-outside-click';
import { useToggleTopic } from '../../hooks/use-toggle-topic';
import { httpGet } from '../../lib/http';
import { isLoggedIn } from '../../lib/jwt';
import type { ResourceType } from '../../lib/resource-progress';
import {
  isTopicDone,
  renderTopicProgress,
  updateResourceProgress as updateResourceProgressApi,
} from '../../lib/resource-progress';
import { pageProgressMessage, sponsorHidden } from '../../stores/page';
import { TopicProgressButton } from './TopicProgressButton';
import { showLoginPopup } from '../../lib/popup';
import { Spinner } from '../ReactIcons/Spinner';

import { getUrlParams } from '../../lib/browser';
import { cn } from '../../lib/classname';

export const allowedLinkTypes = [
  'video',
  'article',
  'opensource',
  'course',
  'website',
  'podcast',
] as const;

type TopicDetailProps = {
  isEmbed?: boolean;
  canSubmitContribution: boolean;
};

export type AllowedLinkTypes = (typeof allowedLinkTypes)[number];

const linkTypes: Record<AllowedLinkTypes, string> = {
  article: 'bg-yellow-200',
  course: 'bg-green-200',
  opensource: 'bg-blue-200',
  podcast: 'bg-purple-200',
  video: 'bg-pink-200',
  website: 'bg-red-200',
};

export interface RoadmapContentDocument {
  _id?: string;
  roadmapId: string;
  nodeId: string;
  title: string;
  description: string;
  links: {
    id: string;
    type: AllowedLinkTypes;
    title: string;
    url: string;
  }[];
}

export function TopicDetail(props: TopicDetailProps) {
  const { canSubmitContribution, isEmbed = false } = props;

  const [hasEnoughLinks, setHasEnoughLinks] = useState(false);
  const [contributionUrl, setContributionUrl] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isContributing, setIsContributing] = useState(false);
  const [error, setError] = useState('');
  const [topicHtml, setTopicHtml] = useState('');
  const [topicTitle, setTopicTitle] = useState('');
  const [links, setLinks] = useState<RoadmapContentDocument['links']>([]);

  const { secret } = getUrlParams() as { secret: string };
  const isGuest = useMemo(() => !isLoggedIn(), []);
  const topicRef = useRef<HTMLDivElement>(null);

  const [topicId, setTopicId] = useState('');
  const [resourceId, setResourceId] = useState('');
  const [resourceType, setResourceType] = useState<ResourceType>('roadmap');

  useOutsideClick(topicRef, () => {
    setIsActive(false);
  });

  useKeydown('Escape', () => {
    setIsActive(false);
  });

  useToggleTopic(({ topicId, resourceType, resourceId }) => {
    if (isGuest) {
      showLoginPopup();
      return;
    }

    pageProgressMessage.set('Updating');

    isTopicDone({ topicId, resourceId, resourceType })
      .then((oldIsDone) =>
        updateResourceProgressApi(
          {
            topicId,
            resourceId,
            resourceType,
          },
          oldIsDone ? 'pending' : 'done',
        ),
      )
      .then(({ done = [] }) => {
        renderTopicProgress(
          topicId,
          done.includes(topicId) ? 'done' : 'pending',
        );
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        pageProgressMessage.set('');
      });
  });

  useLoadTopic(({ topicId, resourceType, resourceId }) => {
    setError('');
    setIsLoading(true);
    setIsActive(true);
    sponsorHidden.set(true);

    setTopicId(topicId);
    setResourceType(resourceType);
    setResourceId(resourceId);

    const topicPartial = topicId.replace(/:/g, '/');
    let topicUrl =
      resourceType === 'roadmap'
        ? `/${resourceId}/${topicPartial}`
        : `/best-practices/${resourceId}/${topicPartial}`;

    httpGet<string | RoadmapContentDocument>(
      topicUrl,
      {},
      {
        headers: {
          Accept: 'text/html',
        },
      },
    )
      .then(({ response }) => {
        if (!response) {
          setError('Topic not found.');
          setIsLoading(false);
          return;
        }

        let topicHtml = '';
        topicHtml = response as string;
        const topicDom = new DOMParser().parseFromString(
          topicHtml,
          'text/html',
        );

        const links = topicDom.querySelectorAll('a');
        const urlElem: HTMLElement =
          topicDom.querySelector('[data-github-url]')!;
        const contributionUrl = urlElem?.dataset?.githubUrl || '';

        setContributionUrl(contributionUrl);
        setHasEnoughLinks(links.length >= 3);

        setIsLoading(false);
        setTopicHtml(topicHtml);
      })
      .catch((err) => {
        setError('Something went wrong. Please try again later.');
        setIsLoading(false);
      });
  });

  useEffect(() => {
    if (isActive) topicRef?.current?.focus();
  }, [isActive]);

  if (!isActive) {
    return null;
  }

  const hasContent = topicHtml?.length > 0 || topicTitle;

  return (
    <div className={'relative z-50'}>
      <div
        ref={topicRef}
        tabIndex={0}
        className="fixed right-0 top-0 z-40 h-screen w-full overflow-y-auto bg-white p-4 focus:outline-0 sm:max-w-[600px] sm:p-6"
      >
        {isLoading && (
          <div className="flex w-full justify-center">
            <Spinner
              outerFill="#d1d5db"
              className="h-6 w-6 sm:h-12 sm:w-12"
              innerFill="#2563eb"
            />
          </div>
        )}

        {!isContributing && !isLoading && !error && (
          <>
            <div className="mb-2">
              {!isEmbed && (
                <TopicProgressButton
                  topicId={topicId}
                  resourceId={resourceId}
                  resourceType={resourceType}
                  onClose={() => {
                    setIsActive(false);
                  }}
                />
              )}

              <button
                type="button"
                id="close-topic"
                className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                onClick={() => {
                  setIsActive(false);
                }}
              ></button>
            </div>

            {hasContent ? (
              <div className="prose prose-quoteless prose-h1:mb-2.5 prose-h1:mt-7 prose-h2:mb-3 prose-h2:mt-0 prose-h3:mb-[5px] prose-h3:mt-[10px] prose-p:mb-2 prose-p:mt-0 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-li:m-0 prose-li:mb-0.5">
                {topicTitle && <h1>{topicTitle}</h1>}
                <div
                  id="topic-content"
                  dangerouslySetInnerHTML={{
                    __html:
                      typeof topicHtml === 'string' ? topicHtml : '',
                  }}
                />
              </div>
            ) : (
              <div className="flex h-[calc(100%-38px)] flex-col items-center justify-center">
                <p className="mt-2 text-lg font-medium text-gray-500">
                  Empty Content
                </p>
              </div>
            )}

            {links.length > 0 && (
              <ul className="mt-6 space-y-1">
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      target="_blank"
                      className="font-medium underline"
                    >
                      <span
                        className={cn(
                          'mr-2 inline-block rounded px-1.5 py-1 text-xs uppercase no-underline',
                          linkTypes[link.type],
                        )}
                      >
                        {link.type.charAt(0).toUpperCase() +
                          link.type.slice(1)}
                      </span>
                      {link.title} {/* Removed JSON.stringify */}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {canSubmitContribution && !hasEnoughLinks && contributionUrl && (
              <div className="mt-8 flex-1 border-t">
                <p className="mb-2 mt-2 text-sm leading-relaxed text-gray-400">
                  Help us improve this introduction and submit a link to a
                  good article, podcast, video, or any other resource that
                  helped you understand this topic better.
                </p>
                <a
                  href={contributionUrl}
                  target={'_blank'}
                  className="flex w-full items-center justify-center rounded-md bg-gray-800 p-2 text-sm text-white transition-colors hover:bg-black hover:text-white disabled:bg-green-200 disabled:text-black"
                ></a>
              </div>
            )}
          </>
        )}

        {!isContributing && !isLoading && error && (
          <>
            <button
              type="button"
              id="close-topic"
              className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
              onClick={() => {
                setIsActive(false);
                setIsContributing(false);
              }}
            ></button>
            <div className="flex h-full flex-col items-center justify-center">
              <p className="mt-2 text-lg font-medium text-red-500">
                {error} {/* Removed JSON.stringify */}
              </p>
            </div>
          </>
        )}
      </div>
      <div className="fixed inset-0 z-30 bg-gray-900 bg-opacity-50 dark:bg-opacity-80"></div>
    </div>
  );
}

import type { MarkdownFileType } from './File';
import type { OrganigramaFrontmatter } from './organigrama';

// Generates URL from the topic file path e.g.
// -> /src/data/best-practices/frontend-performance/content/100-use-https-everywhere
//    /best-practices/frontend-performance/use-https-everywhere
// -> /src/data/best-practices/frontend-performance/content/102-use-cdn-for-static-assets
//    /best-practices/use-cdn-for-static-assets
function generateTopicUrl(filePath: string) {
  return filePath
    .replace('/src/data/organigrama/', '/') // Remove the base `/src/data/best-practices` from path
    .replace('/content', '') // Remove the `/[bestPracticeId]/content`
    .replace(/\/\d+-/g, '/') // Remove ordering info `/101-ecosystem`
    .replace(/\/index\.md$/, '') // Make the `/index.md` to become the parent folder only
    .replace(/\.md$/, ''); // Remove `.md` from the end of file
}

export interface OrganigramaTopicFileType {
  url: string;
  heading: string;
  file: MarkdownFileType;
  organigrama: OrganigramaFrontmatter;
  organigramaId: string;
}

/**
 * Gets all the topic files available for all the best practices
 * @returns Hashmap containing the topic slug and the topic file content
 */
export async function getAllOrganigramaTopicFiles(): Promise<
  Record<string, OrganigramaTopicFileType>
> {
  const contentFiles = await import.meta.glob<string>(
    '/src/data/organigrama/*/content/**/*.md',
    {
      eager: true,
    }
  );

  const mapping: Record<string, OrganigramaTopicFileType> = {};

  for (let filePath of Object.keys(contentFiles)) {
    const fileContent: MarkdownFileType = contentFiles[filePath] as any;
    const fileHeadings = fileContent.getHeadings();
    const firstHeading = fileHeadings[0];

    const [, organigramaId] =
      filePath.match(/^\/src\/data\/organigrama\/(.+)?\/content\/(.+)?$/) ||
      [];
    const topicUrl = generateTopicUrl(filePath);

    const currentOrganigrama = await import(
      `../data/organigrama/${organigramaId}/${organigramaId}.md`
    );

    mapping[topicUrl] = {
      url: topicUrl,
      heading: firstHeading?.text,
      file: fileContent,
      organigrama: currentOrganigrama.frontmatter,
      organigramaId: organigramaId,
    };
  }

  return mapping;
}

/**
 * Gets the the topics for a given best practice
 *
 * @param organigramaId BestPractice id for which you want the topics
 *
 * @returns Promise<TopicFileType[]>
 */
export async function getTopicsByOrganigramaId(
  organigramaId: string
): Promise<OrganigramaTopicFileType[]> {
  const topicFileMapping = await getAllOrganigramaTopicFiles();
  const allTopics = Object.values(topicFileMapping);

  return allTopics.filter((topic) => topic.organigramaId === organigramaId);
}

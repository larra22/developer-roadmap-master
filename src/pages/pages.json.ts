import { getAllOrganigramas } from '../lib/organigrama';
import { getAllGuides } from '../lib/guide';
import { getRoadmapsByTag } from '../lib/roadmap';
import { getAllVideos } from '../lib/video';

export const ssr = false;
export const csr = true;

export async function GET() {
  const guides = await getAllGuides();
  const videos = await getAllVideos();
  const roadmaps = await getRoadmapsByTag('roadmap');
  const organigramas = await getAllOrganigramas();

  return new Response(
    JSON.stringify([
      ...roadmaps.map((roadmap) => ({
        id: roadmap.id,
        url: `/${roadmap.id}`,
        title: roadmap.frontmatter.briefTitle,
        description: roadmap.frontmatter.briefDescription,
        group: 'Roadmaps',
        metadata: {
          tags: roadmap.frontmatter.tags,
        },
      })),
      ...organigramas.map((organigrama) => ({
        url: `/organigrama/${organigrama.id}`,
        title: organigrama.frontmatter.briefTitle,
        group: 'Organigrama',
      })),
      ...guides.map((guide) => ({
        url: `/guides/${guide.id}`,
        title: guide.frontmatter.title,
        group: 'Guides',
      })),
      ...videos.map((guide) => ({
        url: `/videos/${guide.id}`,
        title: guide.frontmatter.title,
        group: 'Videos',
      })),
    ]),
  )};


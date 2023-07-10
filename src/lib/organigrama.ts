import type { MarkdownFileType } from './File';

export interface OrganigramaFrontmatter {
  jsonUrl: string;
  pdfUrl: string;
  order: number;
  briefTitle: string;
  briefDescription: string;
  title: string;
  description: string;
  isNew: boolean;
  isUpcoming: boolean;
  dimensions?: {
    width: number;
    height: number;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  schema?: {
    headline: string;
    description: string;
    datePublished: string;
    dateModified: string;
    imageUrl: string;
  };
}

export type OrganigramaFileType = MarkdownFileType<OrganigramaFrontmatter> & {
  id: string;
};

function organigramaPathToId(filePath: string): string {
  const fileName = filePath.split('/').pop() || '';

  return fileName.replace('.md', '');
}

/**
 * Gets the IDs of all the best practices available on the website
 *
 * @returns string[] Array of best practices file IDs
 */
export async function getOrganigramaIds() {
  const organigramaFiles = await import.meta.glob<OrganigramaFileType>(
    '/src/data/organigrama/*/*.md',
    {
      eager: true,
    }
  );

  return Object.keys(organigramaFiles).map(organigramaPathToId);
}

/**
 * Gets all the best practice files
 *
 * @param tag Tag assigned to best practice
 * @returns Promisified OrganigramaFileType[]
 */
export async function getAllOrganigramas(): Promise<OrganigramaFileType[]> {
  const organigramaFilesMap = await import.meta.glob<OrganigramaFileType>(
    '/src/data/organigrama/*/*.md',
    {
      eager: true,
    }
  );

  const organigramaFiles = Object.values(organigramaFilesMap);
  const organigramaItems = organigramaFiles.map((organigramaFile) => ({
    ...organigramaFile,
    id: organigramaPathToId(organigramaFile.file),
  }));

  return organigramaItems.sort(
    (a, b) => a.frontmatter.order - b.frontmatter.order
  );
}

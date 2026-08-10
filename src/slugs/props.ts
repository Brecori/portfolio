export type ProjectContent = {
  description: string;
  githubLink?: string;
  image: string;
  productionLink?: string;
  slug: string;
  stack: string[];
  summary: string;
  titulo: string;
};

export type ProjectSlugProps = ProjectContent[];

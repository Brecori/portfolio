export type ProjectSlug =
  | "pulse-metrics"
  | "atlas-storefront"
  | "mood-lab"
  | "finflow"
  | "signal-launch";

export type ProjectContent = {
  content: string;
  data: string;
  description: string;
  githubLink?: string;
  image: string;
  productionLink?: string;
  slug: ProjectSlug;
  stack: string[];
  status: string;
  summary: string;
  titulo: string;
};

export type ProjectSlugProps = ProjectContent[];

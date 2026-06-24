import type { ProjectContent } from "../props";

export const createPulseMetricsProject = (
  t: (key: string) => string,
): ProjectContent => {
  return {
    description: t("description"),
    githubLink: "https://github.com/",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    productionLink: "#",
    slug: "pulse-metrics",
    stack: ["Next.js", "TypeScript", "Styled Components"],
    summary: t("summary"),
    titulo: t("titulo"),
  };
};

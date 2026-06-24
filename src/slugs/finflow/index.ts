import type { ProjectContent } from "../props";

export const createFinflowProject = (
  t: (key: string) => string,
): ProjectContent => {
  return {
    description: t("description"),
    githubLink: "https://github.com/",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    productionLink: "#",
    slug: "finflow",
    stack: ["React Native", "Expo"],
    summary: t("summary"),
    titulo: t("titulo"),
  };
};

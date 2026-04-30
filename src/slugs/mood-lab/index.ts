import type { ProjectContent } from "../props";

export const createMoodLabProject = (
  t: (key: string) => string,
): ProjectContent => {
  return {
    content: t("content"),
    data: "2024",
    description: t("description"),
    githubLink: "https://github.com/",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    productionLink: "#",
    slug: "mood-lab",
    stack: ["React", "GSAP"],
    status: "concept",
    summary: t("summary"),
    titulo: t("titulo"),
  };
};

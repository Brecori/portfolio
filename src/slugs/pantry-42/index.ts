import type { ProjectContent } from "../props";

export const createPantry42Project = (
  t: (key: string) => string,
): ProjectContent => {
  return {
    description: t("description"),
    githubLink: "https://github.com/Brecori/blog-next",
    image: "/imgs/projects/pantry-42.webp",
    slug: "pantry-42",
    stack: ["Next.js", "Tailwind", "SQLite"],
    summary: t("summary"),
    titulo: t("titulo"),
  };
};

import type { ProjectContent } from "../props";

export const createPomodoriumProject = (
  t: (key: string) => string,
): ProjectContent => {
  return {
    description: t("description"),
    githubLink: "https://github.com/Brecori/pomodore",
    image: "/imgs/projects/pomodorium.webp",
    productionLink: "https://pomodore-liard.vercel.app/",
    slug: "pomodorium",
    stack: ["React.js", "CSS", "TypeScript"],
    summary: t("summary"),
    titulo: t("titulo"),
  };
};

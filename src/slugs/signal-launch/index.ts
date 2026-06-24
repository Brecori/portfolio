import type { ProjectContent } from "../props";

export const createSignalLaunchProject = (
  t: (key: string) => string,
): ProjectContent => {
  return {
    description: t("description"),
    githubLink: "https://github.com/",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    productionLink: "#",
    slug: "signal-launch",
    stack: ["Next.js", "Framer Motion"],
    summary: t("summary"),
    titulo: t("titulo"),
  };
};

import type { ProjectContent } from "../props";

export const createCibeleRodriguesProject = (
  t: (key: string) => string,
): ProjectContent => {
  return {
    description: t("description"),
    githubLink: "https://github.com/Brecori/cibele-portfolio",
    image: "/imgs/projects/cibele.webp",
    productionLink: "https://cibele-portfolio.vercel.app/",
    slug: "cibele-rodrigues",
    stack: ["Next.js", "TypeScript", "Styled Components", "GSAP"],
    summary: t("summary"),
    titulo: t("titulo"),
  };
};

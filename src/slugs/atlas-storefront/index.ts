import type { ProjectContent } from "../props";

export const createAtlasStorefrontProject = (
  t: (key: string) => string,
): ProjectContent => {
  return {
    description: t("description"),
    githubLink: "https://github.com/",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    productionLink: "#",
    slug: "atlas-storefront",
    stack: ["React", "Zustand", "Stripe"],
    summary: t("summary"),
    titulo: t("titulo"),
  };
};

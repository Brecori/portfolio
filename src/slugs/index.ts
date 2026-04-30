import { createAtlasStorefrontProject } from "./atlas-storefront";
import { createFinflowProject } from "./finflow";
import { createMoodLabProject } from "./mood-lab";
import { createPulseMetricsProject } from "./pulse-metrics";
import { createSignalLaunchProject } from "./signal-launch";
import type { ProjectSlugProps } from "./props";
import { useTranslations } from "next-intl";

export const useProjectSlugs = (): ProjectSlugProps => {
  const pulseMetrics = createPulseMetricsProject(
    useTranslations("featuredProjects.projects.pulseMetrics"),
  );
  const atlasStorefront = createAtlasStorefrontProject(
    useTranslations("featuredProjects.projects.atlasStorefront"),
  );
  const moodLab = createMoodLabProject(
    useTranslations("featuredProjects.projects.moodLab"),
  );
  const finflow = createFinflowProject(
    useTranslations("featuredProjects.projects.finflow"),
  );
  const signalLaunch = createSignalLaunchProject(
    useTranslations("featuredProjects.projects.signalLaunch"),
  );

  return [pulseMetrics, atlasStorefront, moodLab, finflow, signalLaunch];
};

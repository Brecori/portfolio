import { createCibeleRodriguesProject } from "./cibele-rodrigues";
import { createAtlasStorefrontProject } from "./atlas-storefront";
import { createFinflowProject } from "./finflow";
import { createMoodLabProject } from "./mood-lab";
import { createPomodoriumProject } from "./pomodorium";
import { createPulseMetricsProject } from "./pulse-metrics";
import { createSignalLaunchProject } from "./signal-launch";
import type { ProjectSlugProps } from "./props";
import { useTranslations } from "next-intl";

export const useProjectSlugs = (): ProjectSlugProps => {
  const cibeleRodrigues = createCibeleRodriguesProject(
    useTranslations("projects.projects.cibeleRodrigues"),
  );
  const pomodorium = createPomodoriumProject(
    useTranslations("projects.projects.pomodorium"),
  );
  const pulseMetrics = createPulseMetricsProject(
    useTranslations("projects.projects.pulseMetrics"),
  );
  const atlasStorefront = createAtlasStorefrontProject(
    useTranslations("projects.projects.atlasStorefront"),
  );
  const moodLab = createMoodLabProject(
    useTranslations("projects.projects.moodLab"),
  );
  const finflow = createFinflowProject(
    useTranslations("projects.projects.finflow"),
  );
  const signalLaunch = createSignalLaunchProject(
    useTranslations("projects.projects.signalLaunch"),
  );

  return [
    cibeleRodrigues,
    pomodorium,
    pulseMetrics,
    atlasStorefront,
    moodLab,
    finflow,
    signalLaunch,
  ];
};

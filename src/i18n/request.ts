import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const header = (await import(`../messages/header/${locale}.json`)).default;
  const navbar = (await import(`../messages/navbar/${locale}.json`)).default;
  const restQuote = (await import(`../messages/rest-quote/${locale}.json`))
    .default;
  const skills = (await import(`../messages/skills/${locale}.json`)).default;
  const trajectory = (await import(`../messages/trajectory/${locale}.json`))
    .default;
  const featuredProjects = (
    await import(`../messages/featured-projects/${locale}.json`)
  ).default;
  const pulseMetrics = (
    await import(`../messages/featured-projects/pulse-metrics/${locale}.json`)
  ).default;
  const atlasStorefront = (
    await import(
      `../messages/featured-projects/atlas-storefront/${locale}.json`
    )
  ).default;
  const moodLab = (
    await import(`../messages/featured-projects/mood-lab/${locale}.json`)
  ).default;
  const finflow = (
    await import(`../messages/featured-projects/finflow/${locale}.json`)
  ).default;
  const signalLaunch = (
    await import(`../messages/featured-projects/signal-launch/${locale}.json`)
  ).default;

  return {
    locale,
    messages: {
      featuredProjects: {
        ...featuredProjects,
        projects: {
          atlasStorefront,
          finflow,
          moodLab,
          pulseMetrics,
          signalLaunch,
        },
      },
      header,
      navbar,
      restQuote,
      skills,
      trajectory,
    },
    // ...
  };
});

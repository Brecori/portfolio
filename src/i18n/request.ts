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
  const contact = (await import(`../messages/contact/${locale}.json`)).default;
  const footer = (await import(`../messages/footer/${locale}.json`)).default;
  const projects = (await import(`../messages/projects/${locale}.json`))
    .default;
  const cibeleRodrigues = (
    await import(`../messages/projects/cibele-rodrigues/${locale}.json`)
  ).default;
  const pomodorium = (
    await import(`../messages/projects/pomodorium/${locale}.json`)
  ).default;
  const pantry42 = (
    await import(`../messages/projects/pantry-42/${locale}.json`)
  ).default;
  const pulseMetrics = (
    await import(`../messages/projects/pulse-metrics/${locale}.json`)
  ).default;
  const atlasStorefront = (
    await import(`../messages/projects/atlas-storefront/${locale}.json`)
  ).default;
  const moodLab = (
    await import(`../messages/projects/mood-lab/${locale}.json`)
  ).default;
  const finflow = (
    await import(`../messages/projects/finflow/${locale}.json`)
  ).default;
  const signalLaunch = (
    await import(`../messages/projects/signal-launch/${locale}.json`)
  ).default;

  return {
    locale,
    messages: {
      projects: {
        ...projects,
        projects: {
          atlasStorefront,
          cibeleRodrigues,
          finflow,
          moodLab,
          pantry42,
          pomodorium,
          pulseMetrics,
          signalLaunch,
        },
      },
      header,
      navbar,
      restQuote,
      skills,
      trajectory,
      contact,
      footer,
    },
    // ...
  };
});

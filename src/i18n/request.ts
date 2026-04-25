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
  const stacks = (await import(`../messages/stacks/${locale}.json`)).default;

  return {
    locale,
    messages: { header, navbar, stacks },
    // ...
  };
});

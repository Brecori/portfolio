import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;

  const changeLanguage = (locale: Locale) => {
    router.replace(pathname, { locale });
  };

  const nextLocale: Locale = currentLocale === "pt-BR" ? "en" : "pt-BR";

  return {
    currentLocale,
    nextLocale,
    changeLanguage,
  };
};

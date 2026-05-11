import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale } from "@/types/language";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export default () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeLanguage = (locale: Locale) => {
    router.replace(pathname, { locale });
  };

  const nextLocale: Locale = currentLocale === "pt-BR" ? "en" : "pt-BR";

  return {
    currentLocale,
    nextLocale,
    changeLanguage,
    hasScrolled,
  };
};

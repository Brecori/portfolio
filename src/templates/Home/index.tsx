"use client";

import { FC } from "react";
import * as S from "./styles";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export const HomeTemplate: FC = () => {
  const t = useTranslations("header");

  const router = useRouter();
  const pathname = usePathname();

  function changeLanguage(locale: string) {
    router.replace(pathname, { locale });
  }

  return (
    <S.HomeContainer>
      <h1>
        {t.rich("title", {
          highlight: (chunks) => <strong>{chunks}</strong>,
        })}
      </h1>

      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("pt-BR")}>Português</button>
    </S.HomeContainer>
  );
};

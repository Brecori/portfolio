"use client";

import { FC } from "react";
import * as S from "./styles";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Navbar } from "@/components/Navbar";
import { Header } from "./Header";

export const HomeTemplate: FC = () => {
  const t = useTranslations("header");

  const router = useRouter();
  const pathname = usePathname();

  function changeLanguage(locale: string) {
    router.replace(pathname, { locale });
  }

  return (
    <>
      <Navbar />
      <S.HomeContainer>
        <Header />
      </S.HomeContainer>
    </>
  );
};

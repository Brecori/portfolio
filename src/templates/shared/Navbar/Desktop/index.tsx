"use client";

import { FC } from "react";
import * as S from "./styles";
import { TbLanguage } from "react-icons/tb";
import useHelpers from "../helpers";
import C from "../constants";
import { useTranslations } from "next-intl";
import { scrollToElement } from "@/lib/smooth-scroll";

export const NavbarDesktop: FC = () => {
  const t = useTranslations("navbar");
  const { changeLanguage, currentLocale, nextLocale, hasScrolled } =
    useHelpers();

  return (
    <S.NavbarContainer data-navbar $hasScrolled={hasScrolled}>
      <S.Logo href="/">{C.title}</S.Logo>
      <S.Menu>
        {C.menuItems.map(({ labelKey, targetId }) => (
          <S.MenuItem key={targetId}>
            <button type="button" onClick={() => scrollToElement(targetId)}>
              {t(labelKey)}
            </button>
          </S.MenuItem>
        ))}
      </S.Menu>
      <S.TogglesContainer>
        <S.LanguageToggleButton
          type="button"
          onClick={() => changeLanguage(nextLocale)}
        >
          <TbLanguage />
          <S.LanguageToggleText>{currentLocale}</S.LanguageToggleText>
        </S.LanguageToggleButton>
      </S.TogglesContainer>
    </S.NavbarContainer>
  );
};

"use client";

import { FiMenu, FiX } from "react-icons/fi";
import { TbLanguage } from "react-icons/tb";
import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import C from "../constants";
import useHelpers from "../helpers";
import * as S from "./styles";
import { scrollToElement } from "@/lib/smooth-scroll";

export const NavbarMobile: FC = () => {
  const t = useTranslations("navbar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { changeLanguage, nextLocale, hasScrolled } = useHelpers();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = (targetId: string) => {
    scrollToElement(targetId);
    closeMenu();
  };

  return (
    <>
      <S.NavbarContainer data-navbar $hasScrolled={hasScrolled}>
        <S.LeftGroup>
          <S.HamburgerButton
            type="button"
            aria-label={isMenuOpen ? t("aria.closeMenu") : t("aria.openMenu")}
            $isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <S.MenuToggleIcon $isOpen={isMenuOpen}>
              <FiMenu />
            </S.MenuToggleIcon>
            <S.CloseToggleIcon $isOpen={isMenuOpen}>
              <FiX />
            </S.CloseToggleIcon>
          </S.HamburgerButton>
          <S.Logo href="/">{C.title}</S.Logo>
        </S.LeftGroup>

        <S.TogglesContainer>
          <S.IconButton
            type="button"
            onClick={() => changeLanguage(nextLocale)}
            name={nextLocale}
          >
            <TbLanguage />
          </S.IconButton>
        </S.TogglesContainer>
      </S.NavbarContainer>

      <S.MenuDrawer $isOpen={isMenuOpen} aria-hidden={!isMenuOpen}>
        <S.Menu>
          {C.menuItems.map(({ labelKey, targetId }) => (
            <S.MenuItem key={targetId} tabIndex={isMenuOpen ? 0 : -1}>
              <button
                type="button"
                onClick={() => handleMenuItemClick(targetId)}
              >
                {t(labelKey)}
              </button>
            </S.MenuItem>
          ))}
        </S.Menu>
      </S.MenuDrawer>
    </>
  );
};

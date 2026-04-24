import { useThemeContext } from "@/contexts/theme-provider";
import { LanguagesIcon, MenuIcon, MoonIcon, SunIcon, XIcon } from "lucide-react";
import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import C from "../constants";
import useHelpers from "../helpers";
import * as S from "./styles";

export const NavbarMobile: FC = () => {
  const t = useTranslations("navbar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mode, toggleTheme } = useThemeContext();
  const { changeLanguage, nextLocale, hasScrolled } = useHelpers();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <S.NavbarContainer $hasScrolled={hasScrolled}>
        <S.LeftGroup>
          <S.HamburgerButton
            type="button"
            aria-label={isMenuOpen ? t("aria.closeMenu") : t("aria.openMenu")}
            $isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <S.MenuToggleIcon $isOpen={isMenuOpen}>
              <MenuIcon />
            </S.MenuToggleIcon>
            <S.CloseToggleIcon $isOpen={isMenuOpen}>
              <XIcon />
            </S.CloseToggleIcon>
          </S.HamburgerButton>
          <S.Logo>{C.title}</S.Logo>
        </S.LeftGroup>

        <S.TogglesContainer>
          <S.IconButton type="button" onClick={() => changeLanguage(nextLocale)}>
            <LanguagesIcon />
          </S.IconButton>
          <S.IconButton type="button" onClick={toggleTheme}>
            {mode === "dark" ? <MoonIcon /> : <SunIcon />}
          </S.IconButton>
        </S.TogglesContainer>
      </S.NavbarContainer>

      <S.MenuDrawer $isOpen={isMenuOpen} aria-hidden={!isMenuOpen}>
        <S.Menu>
          <S.MenuItem>
            <a href="#" onClick={closeMenu}>
              {t("items.home")}
            </a>
          </S.MenuItem>
          <S.MenuItem>
            <a href="#" onClick={closeMenu}>
              {t("items.projects")}
            </a>
          </S.MenuItem>
          <S.MenuItem>
            <a href="#" onClick={closeMenu}>
              {t("items.contact")}
            </a>
          </S.MenuItem>
        </S.Menu>
      </S.MenuDrawer>
    </>
  );
};

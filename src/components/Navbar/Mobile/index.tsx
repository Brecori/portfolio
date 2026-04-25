import { useThemeContext } from "@/contexts/theme-provider";
import { LanguagesIcon, MenuIcon, MoonIcon, SunIcon, XIcon } from "lucide-react";
import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import C from "../constants";
import useHelpers from "../helpers";
import * as S from "./styles";
import { scrollToElement } from "@/lib/smooth-scroll";

export const NavbarMobile: FC = () => {
  const t = useTranslations("navbar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mode, toggleTheme } = useThemeContext();
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
          {C.menuItems.map(({ labelKey, targetId }) => (
            <S.MenuItem key={targetId}>
              <button type="button" onClick={() => handleMenuItemClick(targetId)}>
                {t(labelKey)}
              </button>
            </S.MenuItem>
          ))}
        </S.Menu>
      </S.MenuDrawer>
    </>
  );
};

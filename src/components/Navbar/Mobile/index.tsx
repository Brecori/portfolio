import { useThemeContext } from "@/contexts/theme-provider";
import {
  LanguagesIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import { FC, useState } from "react";
import C from "../constants";
import useHelpers from "../helpers";
import * as S from "./styles";

export const NavbarMobile: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mode, toggleTheme } = useThemeContext();
  const { changeLanguage, nextLocale } = useHelpers();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <S.NavbarContainer>
        <S.LeftGroup>
          <S.HamburgerButton
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </S.HamburgerButton>
          <S.Logo>{C.title}</S.Logo>
        </S.LeftGroup>

        <S.TogglesContainer>
          <S.IconButton
            type="button"
            aria-label="Change language"
            onClick={() => changeLanguage(nextLocale)}
          >
            <LanguagesIcon />
          </S.IconButton>
          <S.IconButton
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {mode === "dark" ? <MoonIcon /> : <SunIcon />}
          </S.IconButton>
        </S.TogglesContainer>
      </S.NavbarContainer>

      <S.MenuOverlay
        type="button"
        $isOpen={isMenuOpen}
        aria-label="Close navigation menu"
        aria-hidden={!isMenuOpen}
        onClick={closeMenu}
      />

      <S.MenuDrawer $isOpen={isMenuOpen} aria-hidden={!isMenuOpen}>
        <S.DrawerHeader>
          <S.DrawerLogo>{C.title}</S.DrawerLogo>
        </S.DrawerHeader>

        <S.Menu>
          <S.MenuItem>
            <a href="#" onClick={closeMenu}>
              Home
            </a>
          </S.MenuItem>
          <S.MenuItem>
            <a href="#" onClick={closeMenu}>
              Projects
            </a>
          </S.MenuItem>
          <S.MenuItem>
            <a href="#" onClick={closeMenu}>
              Contact
            </a>
          </S.MenuItem>
        </S.Menu>
      </S.MenuDrawer>
    </>
  );
};

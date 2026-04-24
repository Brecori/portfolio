import { useThemeContext } from "@/contexts/theme-provider";
import { FC } from "react";
import * as S from "./styles";
import { LanguagesIcon, MoonIcon, SunIcon } from "lucide-react";
import useHelpers from "../helpers";
import useAnimation from "./animation";
import C from "../constants";

export const NavbarDesktop: FC = () => {
  const { mode, toggleTheme } = useThemeContext();
  const { themeIconRef, themeTextRef } = useAnimation(mode);
  const { changeLanguage, currentLocale, nextLocale } = useHelpers();

  return (
    <S.NavbarContainer $hasScrolled={true}>
      <S.Logo>{C.title}</S.Logo>
      <S.Menu>
        <S.MenuItem>
          <a href="#">Home</a>
        </S.MenuItem>
        <S.MenuItem>
          <a href="#">Projects</a>
        </S.MenuItem>
        <S.MenuItem>
          <a href="#">Contact</a>
        </S.MenuItem>
      </S.Menu>
      <S.TogglesContainer>
        <S.LanguageToggleButton onClick={() => changeLanguage(nextLocale)}>
          <LanguagesIcon />
          <S.LanguageToggleText>{currentLocale}</S.LanguageToggleText>
        </S.LanguageToggleButton>
        <S.ThemeToggleButton onClick={toggleTheme}>
          {mode === "dark" ? (
            <MoonIcon ref={themeIconRef} />
          ) : (
            <SunIcon ref={themeIconRef} />
          )}
          <S.LanguageToggleText ref={themeTextRef}>{mode}</S.LanguageToggleText>
        </S.ThemeToggleButton>
      </S.TogglesContainer>
    </S.NavbarContainer>
  );
};

import { useThemeContext } from "@/contexts/theme-provider";
import { FC } from "react";
import * as S from "./styles";
import { LanguagesIcon, MoonIcon, SunIcon } from "lucide-react";
import useHelpers from "../helpers";
import useAnimation from "./animation";
import C from "../constants";
import { useTranslations } from "next-intl";
import { scrollToElement } from "@/lib/smooth-scroll";

export const NavbarDesktop: FC = () => {
  const t = useTranslations("navbar");
  const { mode, toggleTheme } = useThemeContext();
  const { themeIconRef, themeTextRef } = useAnimation(mode);
  const { changeLanguage, currentLocale, nextLocale, hasScrolled } = useHelpers();

  return (
    <S.NavbarContainer data-navbar $hasScrolled={hasScrolled}>
      <S.Logo>{C.title}</S.Logo>
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
          <LanguagesIcon />
          <S.LanguageToggleText>{currentLocale}</S.LanguageToggleText>
        </S.LanguageToggleButton>
        <S.ThemeToggleButton type="button" onClick={toggleTheme}>
          {mode === "dark" ? (
            <MoonIcon ref={themeIconRef} />
          ) : (
            <SunIcon ref={themeIconRef} />
          )}
          <S.LanguageToggleText ref={themeTextRef}>
            {t(`theme.${mode}`)}
          </S.LanguageToggleText>
        </S.ThemeToggleButton>
      </S.TogglesContainer>
    </S.NavbarContainer>
  );
};

"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";
import { FiFileText } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { ScrollDownButton } from "../../../components/ScrollDownButton";
import useAnimation from "./animation";
import * as S from "./styles";

type HeaderTitle = {
  main: string;
  highlight: string;
};

export const Header: FC = () => {
  const t = useTranslations("header");
  const titles = t.raw("titles") as HeaderTitle[];
  const name = titles[0]?.main ?? "Breno Tosi";
  const role = titles[0]?.highlight;
  const rotatingPhrases = titles[1]
    ? [titles[1].main, titles[1].highlight]
    : [];
  const {
    handleInitialAnimationComplete,
    titleIndex,
    titleRef,
  } = useAnimation(rotatingPhrases.length);
  const currentPhrase = rotatingPhrases[titleIndex];

  return (
    <S.HeaderContainer id="intro">
      <S.LeftGroup
        stagger={0.3}
        duration={2}
        onAnimationComplete={handleInitialAnimationComplete}
      >
        <S.Role>{role}</S.Role>
        <S.Title>{name}</S.Title>
        <S.RotatingPhrase ref={titleRef}>{currentPhrase}</S.RotatingPhrase>
        <S.Description>{t("description")}</S.Description>

        <S.ButtonsContainer>
          <S.IconLink
            href="https://github.com/brenotosi"
            target="_blank"
            rel="noreferrer"
            aria-label={t("actions.github")}
            data-cursor-hover
          >
            <SiGithub aria-hidden="true" />
            <S.IconTooltip>{t("actions.github")}</S.IconTooltip>
          </S.IconLink>
          <S.IconButton
            type="button"
            aria-label={t("actions.resume")}
            data-cursor-hover
          >
            <FiFileText aria-hidden="true" />
            <S.IconTooltip>{t("actions.resume")}</S.IconTooltip>
          </S.IconButton>
          <S.IconLink
            href="https://www.linkedin.com/in/brenotosi"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            data-cursor-hover
          >
            <FaLinkedinIn aria-hidden="true" />
            <S.IconTooltip>LinkedIn</S.IconTooltip>
          </S.IconLink>
        </S.ButtonsContainer>
      </S.LeftGroup>

      <ScrollDownButton label={t("actions.scrollDown")} />
    </S.HeaderContainer>
  );
};

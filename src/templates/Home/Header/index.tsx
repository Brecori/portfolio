"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";
import { ScrollDownButton } from "@/components/ScrollDownButton";
import { FiFileText } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import useAnimation from "./animation";
import C from "./constants";
import * as S from "./styles";

export const Header: FC = () => {
  const t = useTranslations("header");
  const name = t("title.name");
  const role = t("title.role");
  const resumeFileName = t("actions.resumeFileName");
  const rotatingPhrases = t.raw("rotatingPhrases") as string[];
  const { handleInitialAnimationComplete, titleIndex, titleRef } = useAnimation(
    rotatingPhrases.length,
  );
  const currentPhrase = rotatingPhrases[titleIndex];
  const resumePath = C.getResumePath(resumeFileName);

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
            href={C.github}
            target="_blank"
            rel="noreferrer"
            aria-label={t("actions.github")}
            data-cursor-hover
          >
            <SiGithub aria-hidden="true" />
            <S.IconTooltip>{t("actions.github")}</S.IconTooltip>
          </S.IconLink>
          <S.IconLink
            href={resumePath}
            download={resumeFileName}
            aria-label={t("actions.resume")}
            data-cursor-hover
          >
            <FiFileText aria-hidden="true" />
            <S.IconTooltip>{t("actions.resume")}</S.IconTooltip>
          </S.IconLink>
          <S.IconLink
            href={C.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={t("actions.linkedin")}
            data-cursor-hover
          >
            <FaLinkedinIn aria-hidden="true" />
            <S.IconTooltip>{t("actions.linkedin")}</S.IconTooltip>
          </S.IconLink>
        </S.ButtonsContainer>
      </S.LeftGroup>

      <ScrollDownButton label={t("actions.scrollDown")} />
    </S.HeaderContainer>
  );
};

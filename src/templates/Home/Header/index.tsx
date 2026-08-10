"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";
import { IconLink } from "@/components/IconLink";
import { getResumePath, github, linkedin } from "@/constants/contact";
import { FiFileText } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
import useAnimation from "./animation";
import C from "./constants";
import * as S from "./styles";
import { PAGE_LOADER_TOTAL_SECONDS } from "@/constants/page-loader";

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
  const resumePath = getResumePath(resumeFileName);

  return (
    <S.HeaderContainer id="intro">
      <S.MainGroup
        delay={PAGE_LOADER_TOTAL_SECONDS}
        stagger={0.3}
        duration={2}
        onAnimationComplete={handleInitialAnimationComplete}
      >
        <S.Role>{role}</S.Role>
        <S.TitleRevealGroup>
          <S.Title tabIndex={0}>{name}</S.Title>
          <S.TitleImageReveal aria-hidden="true">
            <Image
              src={C.perfilImage.src}
              alt={C.perfilImage.alt}
              width={350}
              height={350}
              loading="eager"
            />
          </S.TitleImageReveal>
        </S.TitleRevealGroup>
        <S.RotatingPhrase ref={titleRef}>{currentPhrase}</S.RotatingPhrase>
        <S.Description>{t("description")}</S.Description>

        <S.ButtonsContainer>
          <IconLink href={github} icon={SiGithub} label={t("actions.github")} />
          <IconLink
            href={resumePath}
            download={resumeFileName}
            icon={FiFileText}
            label={t("actions.resume")}
          />
          <IconLink
            href={linkedin}
            icon={FaLinkedinIn}
            label={t("actions.linkedin")}
          />
        </S.ButtonsContainer>
      </S.MainGroup>
    </S.HeaderContainer>
  );
};

"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";
import { IconLink } from "@/components/IconLink";
import { ScrollDownButton } from "@/components/ScrollDownButton";
import { getResumePath, github, linkedin } from "@/constants/contact";
import { FiFileText } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
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
  const resumePath = getResumePath(resumeFileName);

  return (
    <S.HeaderContainer id="intro">
      <S.MainGroup
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
            />
          </S.TitleImageReveal>
        </S.TitleRevealGroup>
        <S.RotatingPhrase ref={titleRef}>{currentPhrase}</S.RotatingPhrase>
        <S.Description>{t("description")}</S.Description>

        <S.ButtonsContainer>
          <IconLink
            href={github}
            icon={SiGithub}
            label={t("actions.github")}
          />
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

      <S.ScrollDownButtonContainer delay={1.5} duration={1.5} stagger={0.3}>
        <ScrollDownButton label={t("actions.scrollDown")} />
      </S.ScrollDownButtonContainer>
    </S.HeaderContainer>
  );
};

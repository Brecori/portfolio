"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";
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
  const {
    handleInitialAnimationComplete,
    isPurpleTitle,
    titleIndex,
    titleRef,
  } = useAnimation(titles.length);
  const currentTitle = titles[titleIndex];

  return (
    <S.HeaderContainer id="intro">
      <S.LeftGroup
        stagger={0.3}
        duration={2}
        onAnimationComplete={handleInitialAnimationComplete}
      >
        <S.Title ref={titleRef}>
          {currentTitle.main} <br />
          <S.SpanTitle $purple={isPurpleTitle}>
            {currentTitle.highlight}
          </S.SpanTitle>
        </S.Title>
        <S.Description>
          {t("description")}
        </S.Description>

        <S.ButtonsContainer>
          <S.Button
            href="https://github.com/brenotosi"
            target="_blank"
            rel="noreferrer"
          >
            {t("actions.github")}
          </S.Button>
          <S.PdfButton>{t("actions.resume")}</S.PdfButton>
        </S.ButtonsContainer>
      </S.LeftGroup>

      <S.RightVisual aria-hidden="true" />
      <ScrollDownButton label={t("actions.scrollDown")} />
    </S.HeaderContainer>
  );
};

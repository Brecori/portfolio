"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";
import useAnimation from "./animation";
import * as S from "./styles";

export const RestQuote: FC = () => {
  const t = useTranslations("restQuote.quote");
  const { highlightRef, quoteRef, sectionRef } = useAnimation();

  return (
    <S.RestQuoteContainer ref={sectionRef}>
      <S.QuoteTrack ref={quoteRef}>
        <S.Dots aria-hidden="true">
          <span />
          <span />
          <span />
        </S.Dots>
        <S.Quote>
          {t("main")}{" "}
          <S.Highlight ref={highlightRef}>{t("highlight")}</S.Highlight>
        </S.Quote>
      </S.QuoteTrack>
    </S.RestQuoteContainer>
  );
};

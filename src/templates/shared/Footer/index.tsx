import { FC } from "react";
import { useTranslations } from "next-intl";
import * as S from "./styles";
import C from "./constants";

const currentYear = new Date().getFullYear();

export const Footer: FC = () => {
  const t = useTranslations("footer");

  return (
    <S.FooterContainer>
      <S.Copyright>{t("copyright", { year: currentYear })}</S.Copyright>
      <S.Logo>{C.logo}</S.Logo>
    </S.FooterContainer>
  );
};

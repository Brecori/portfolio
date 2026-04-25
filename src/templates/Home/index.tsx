"use client";

import { FC } from "react";
import * as S from "./styles";
import { Header } from "./Header";
import { Spacer } from "@/components/Spacer";

export const HomeTemplate: FC = () => {
  return (
    <S.HomeContainer>
      <Header />
      <Spacer />
      <Header />
    </S.HomeContainer>
  );
};

"use client";

import { FC } from "react";
import * as S from "./styles";
import { Header } from "./Header";
import { Spacer } from "@/components/Spacer";
import { Stacks } from "./Stacks";

export const HomeTemplate: FC = () => {
  return (
    <S.HomeContainer>
      <Header />
      <Stacks />
      <Spacer />
      <Header />
    </S.HomeContainer>
  );
};

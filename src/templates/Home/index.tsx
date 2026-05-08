"use client";

import { FC } from "react";
import * as S from "./styles";
import { Header } from "./Header";
import { Spacer } from "@/components/Spacer";
import { Stacks } from "./Stacks";
import { FeaturedProjects } from "./FeaturedProjects";
import { RestQuote } from "./RestQuote";
import { Trajectory } from "./Trajectory";

export const HomeTemplate: FC = () => {
  return (
    <S.HomeContainer>
      <Header />
      <Stacks />
      <Spacer />
      <FeaturedProjects />
      <RestQuote />
      <Trajectory />
      <Stacks />
      <Stacks />
    </S.HomeContainer>
  );
};

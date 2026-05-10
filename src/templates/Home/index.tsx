"use client";

import { FC } from "react";
import * as S from "./styles";
import { Header } from "./Header";
import { Spacer } from "@/components/Spacer";
import { FeaturedProjects } from "./FeaturedProjects";
import { RestQuote } from "./RestQuote";
import { Trajectory } from "./Trajectory";
import { Skills } from "./Skills";

export const HomeTemplate: FC = () => {
  return (
    <S.HomeContainer>
      <Header />
      <Skills />
      <Spacer />
      <FeaturedProjects />
      <RestQuote />
      <Trajectory />
    </S.HomeContainer>
  );
};

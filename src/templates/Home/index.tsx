"use client";

import { FC } from "react";
import * as S from "./styles";
import { Header } from "./Header";
import { Spacer } from "@/components/Spacer";
import { Stacks } from "./Stacks";
import { FeaturedProjects } from "./FeaturedProjects";

export const HomeTemplate: FC = () => {
  return (
    <S.HomeContainer>
      <Header />
      <Stacks />
      <FeaturedProjects />
      <Spacer />
    </S.HomeContainer>
  );
};

"use client";

import { FC } from "react";
import * as S from "./styles";
import { Header } from "./Header";
import { Spacer } from "@/components/Spacer";
import { Projects } from "./Projects";
import { RestQuote } from "./RestQuote";
import { Trajectory } from "./Trajectory";
import { Skills } from "./Skills";
import { Marquee } from "@/components/Marquee";

export const HomeTemplate: FC = () => {
  return (
    <S.HomeContainer>
      <Header />
      <Skills />
      <Spacer />
      <Projects />
      <RestQuote />
      <Trajectory />
      <Marquee
        direction="left"
        speed={6}
        phrases={["Next.js", "TypeScript", "UI Systems", "Frontend"]}
      />
    </S.HomeContainer>
  );
};

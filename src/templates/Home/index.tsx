"use client";

import { FC } from "react";
import dynamic from "next/dynamic";
import * as S from "./styles";
import { Header } from "./Header";
import { Skills } from "./Skills";

const Spacer = dynamic(() =>
  import("@/components/Spacer").then((module) => module.Spacer),
);
const Projects = dynamic(() =>
  import("./Projects").then((module) => module.Projects),
);
const RestQuote = dynamic(() =>
  import("./RestQuote").then((module) => module.RestQuote),
);
const Trajectory = dynamic(() =>
  import("./Trajectory").then((module) => module.Trajectory),
);
const Marquee = dynamic(() =>
  import("@/components/Marquee").then((module) => module.Marquee),
);
const Contact = dynamic(() =>
  import("./Contact").then((module) => module.Contact),
);
const Footer = dynamic(() =>
  import("../shared/Footer").then((module) => module.Footer),
);

export const HomeTemplate: FC = () => {
  return (
    <S.HomeContainer>
      <Header />
      <Skills />
      <Spacer />
      <Projects />
      <RestQuote />
      <Trajectory />
      <Marquee direction="left" speed={7} />
      <Contact />
      <Footer />
    </S.HomeContainer>
  );
};

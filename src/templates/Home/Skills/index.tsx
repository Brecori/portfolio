"use client";

import { FC } from "react";
import { ResponsiveElement } from "@/lib/ResponsiveElement";
import { SkillsDesktop } from "./Desktop";
import { SkillsMobile } from "./Mobile";

export const Skills: FC = () => {
  return (
    <ResponsiveElement
      content={<SkillsDesktop />}
      breakpoints={{ ipadVertical: <SkillsMobile /> }}
    />
  );
};

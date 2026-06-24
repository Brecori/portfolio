"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { viewportsBase } from "@/constants/viewport-base";

const SkillsDesktop = dynamic(
  () => import("./Desktop").then((module) => module.SkillsDesktop),
  { ssr: false },
);

const SkillsMobile = dynamic(
  () => import("./Mobile").then((module) => module.SkillsMobile),
  { ssr: false },
);

const mobileSkillsQuery = `(max-width: ${viewportsBase.ipadVertical.width}px) and (orientation: portrait)`;

export const Skills = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobileSkillsQuery);
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  if (isMobile === null) {
    return null;
  }

  return isMobile ? <SkillsMobile /> : <SkillsDesktop />;
};

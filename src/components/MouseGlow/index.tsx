"use client";

import { FC } from "react";
import useAnimation from "./animation";
import * as S from "./styles";

export const MouseGlow: FC = () => {
  const { glowRef, cursorRingRef, cursorDotRef } = useAnimation();

  return (
    <>
      <S.Glow ref={glowRef} aria-hidden="true" />
      <S.CursorRing ref={cursorRingRef} aria-hidden="true" />
      <S.CursorDot ref={cursorDotRef} aria-hidden="true" />
    </>
  );
};

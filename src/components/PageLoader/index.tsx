"use client";

import NavbarConstants from "@/templates/shared/Navbar/constants";
import { forwardRef, useImperativeHandle, useRef } from "react";
import type { PageLoaderHandle, PageLoaderProps } from "./props";
import * as S from "./styles";

const clampProgress = (progress: number) => {
  return Math.max(0, Math.min(100, Math.round(progress)));
};

export const PageLoader = forwardRef<PageLoaderHandle, PageLoaderProps>(
  ({ fixed = true }, ref) => {
    const initialProgress = 0;
    const percentageRef = useRef<HTMLSpanElement | null>(null);
    const progressRef = useRef<HTMLDivElement | null>(null);
    const logoFillRef = useRef<HTMLDivElement | null>(null);

    useImperativeHandle(ref, () => ({
      setProgress: (nextProgress) => {
        const clampedProgress = clampProgress(nextProgress);
        const progressLabel = `${clampedProgress}%`;

        if (percentageRef.current) {
          percentageRef.current.textContent = progressLabel;
          percentageRef.current.dataset.value = progressLabel;
        }

        if (progressRef.current) {
          progressRef.current.setAttribute(
            "aria-valuenow",
            String(clampedProgress),
          );
          progressRef.current.setAttribute("aria-label", progressLabel);
        }

        if (logoFillRef.current) {
          logoFillRef.current.style.clipPath = `inset(${100 - clampedProgress}% 0 0 0)`;
        }
      },
    }));

    return (
      <S.Overlay $fixed={fixed} aria-live="polite" aria-busy="true">
        <S.Content>
          <S.Percentage
            aria-hidden="true"
            data-value={`${initialProgress}%`}
            ref={percentageRef}
          >
            {initialProgress}%
          </S.Percentage>

          <S.LogoWrapper
            aria-label={`${initialProgress}%`}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={initialProgress}
            ref={progressRef}
          >
            <S.LogoBase aria-hidden="true">{NavbarConstants.title}</S.LogoBase>
            <S.LogoFill
              aria-hidden="true"
              ref={logoFillRef}
              style={{
                clipPath: `inset(${100 - initialProgress}% 0 0 0)`,
              }}
            >
              {NavbarConstants.title}
            </S.LogoFill>
          </S.LogoWrapper>
        </S.Content>
      </S.Overlay>
    );
  },
);

PageLoader.displayName = "PageLoader";

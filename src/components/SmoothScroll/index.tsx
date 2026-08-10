"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PropsWithChildren, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export const SmoothScroll = ({ children }: PropsWithChildren) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      const content = contentRef.current;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const shouldUseNativeScroll = window.matchMedia(
        "(pointer: coarse), (max-width: 600px)",
      ).matches;

      if (
        !wrapper ||
        !content ||
        prefersReducedMotion ||
        shouldUseNativeScroll
      ) {
        return;
      }

      const smoother = ScrollSmoother.create({
        wrapper,
        content,
        smooth: 1.5,
        normalizeScroll: true,
      });

      smoother.scrollTop(0);

      const refresh = gsap.delayedCall(0.1, () => {
        ScrollTrigger.refresh();
      });

      return () => {
        refresh.kill();
        smoother.kill();
      };
    },
    { scope: wrapperRef },
  );

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

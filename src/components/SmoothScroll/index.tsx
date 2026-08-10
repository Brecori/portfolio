"use client";

import { PropsWithChildren, useEffect, useRef } from "react";

export const SmoothScroll = ({ children }: PropsWithChildren) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let active = true;
    let cleanup: (() => void) | undefined;

    const initialize = async () => {
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

      const [{ default: gsap }, { ScrollSmoother }, { ScrollTrigger }] =
        await Promise.all([
          import("gsap"),
          import("gsap/ScrollSmoother"),
          import("gsap/ScrollTrigger"),
        ]);

      if (!active) return;

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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

      cleanup = () => {
        refresh.kill();
        smoother.kill();
      };
    };

    void initialize();

    return () => {
      active = false;
      cleanup?.();
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

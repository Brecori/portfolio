"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, useRef } from "react";
import * as S from "./styles";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const RestQuote: FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const quoteRef = useRef<HTMLDivElement | null>(null);
  const highlightRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const quote = quoteRef.current;
      const highlight = highlightRef.current;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!section || !quote || !highlight || prefersReducedMotion) {
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom 50%",
          scrub: 1,
        },
      });

      timeline.fromTo(
        quote,
        { y: "0" },
        {
          y: "-24rem",
          ease: "none",
        },
        0,
      );

      timeline.fromTo(
        highlight,
        { "--highlight-progress": "0%" },
        {
          "--highlight-progress": "100%",
          ease: "none",
        },
        0,
      );

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    },
    { scope: sectionRef },
  );

  return (
    <S.RestQuoteContainer ref={sectionRef}>
      <S.QuoteTrack ref={quoteRef}>
        <S.Dots aria-hidden="true">
          <span />
          <span />
          <span />
        </S.Dots>
        <S.Quote>
          Entre pixels e movimento, interfaces podem{" "}
          <S.Highlight ref={highlightRef}>respirar.</S.Highlight>
        </S.Quote>
      </S.QuoteTrack>
    </S.RestQuoteContainer>
  );
};

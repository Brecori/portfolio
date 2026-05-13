import { useGSAP } from "@gsap/react";
import { viewportsBase } from "@/constants/viewport-base";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default () => {
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

      if (!section || !quote || !highlight) {
        return;
      }

      if (prefersReducedMotion) {
        gsap.set(highlight, { "--highlight-progress": "100%" });
        return;
      }

      const media = gsap.matchMedia();

      media.add(`(max-width: ${viewportsBase.ipadVertical.width}px)`, () => {
        gsap.set(quote, { y: 0 });
        gsap.set(highlight, { "--highlight-progress": "100%" });
      });

      media.add(`(min-width: ${viewportsBase.mobile.width + 1}px)`, () => {
        const parallaxTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 20%",
            end: "bottom top",
            scrub: 1,
          },
        });

        parallaxTimeline.fromTo(
          quote,
          { y: "0" },
          {
            y: "-44rem",
            ease: "none",
          },
          0,
        );

        const highlightTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 40%",
            end: "bottom 100%",
            scrub: 0.65,
          },
        });

        highlightTimeline.fromTo(
          highlight,
          { "--highlight-progress": "0%" },
          {
            "--highlight-progress": "100%",
            ease: "none",
          },
          0,
        );

        return () => {
          parallaxTimeline.scrollTrigger?.kill();
          parallaxTimeline.kill();
          highlightTimeline.scrollTrigger?.kill();
          highlightTimeline.kill();
        };
      });

      return () => {
        media.revert();
      };
    },
    { scope: sectionRef },
  );

  return {
    highlightRef,
    quoteRef,
    sectionRef,
  };
};

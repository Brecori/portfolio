import { viewportsBase } from "@/constants/viewport-base";
import { useEffect, useRef } from "react";

export default () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const quoteRef = useRef<HTMLDivElement | null>(null);
  const highlightRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let active = true;
    let cleanup: (() => void) | undefined;

    const initialize = async () => {
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
        highlight.style.setProperty("--highlight-progress", "100%");
        return;
      }

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (!active) return;
      gsap.registerPlugin(ScrollTrigger);

      const createScrollAnimation = () => {
        const media = gsap.matchMedia();

        media.add(
          `(max-width: ${viewportsBase.mobile.width}px), (max-width: ${viewportsBase.ipadVertical.width}px) and (orientation: portrait)`,
          () => {
            gsap.set(quote, { y: 0 });
            gsap.set(highlight, { "--highlight-progress": "100%" });
          },
        );

        media.add(
          `(min-width: ${viewportsBase.ipadVertical.width + 1}px), (min-width: ${viewportsBase.mobile.width + 1}px) and (orientation: landscape)`,
          () => {
            gsap.set(highlight, { "--highlight-progress": "0%" });

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
          },
        );

        ScrollTrigger.refresh();

        return () => {
          media.revert();
        };
      };

      let cleanupScrollAnimation: (() => void) | undefined;

      if (!("IntersectionObserver" in window)) {
        cleanup = () => cleanupScrollAnimation?.();
        cleanupScrollAnimation = createScrollAnimation();
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting || cleanupScrollAnimation) {
            return;
          }

          cleanupScrollAnimation = createScrollAnimation();
          observer.disconnect();
        },
        {
          rootMargin: "24% 0px 24% 0px",
          threshold: 0.01,
        },
      );

      observer.observe(section);

      cleanup = () => {
        observer.disconnect();
        cleanupScrollAnimation?.();
      };
    };

    void initialize();
    return () => {
      active = false;
      cleanup?.();
    };
  }, []);

  return {
    highlightRef,
    quoteRef,
    sectionRef,
  };
};

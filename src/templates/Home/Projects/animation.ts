import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default (totalCards: number) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const setCardRef = useCallback(
    (index: number) => (element: HTMLDivElement | null) => {
      cardRefs.current[index] = element;
    },
    [],
  );

  useGSAP(
    () => {
      const section = sectionRef.current;
      const cards = cardRefs.current.filter((card): card is HTMLDivElement =>
        Boolean(card),
      );

      if (!section || cards.length === 0) {
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(cards, { clearProps: "all", opacity: 1 });
        return;
      }

      const targetX = new Map(
        cards.map((card) => [card, Number(gsap.getProperty(card, "x", "px"))]),
      );
      const animation = gsap.fromTo(
        cards,
        {
          pointerEvents: "none",
          transition: "none",
          x: 0,
          zIndex: (index) => index + 1,
        },
        {
          duration: 1.5,
          ease: "power3.inOut",
          opacity: 1,
          x: (_, card) => targetX.get(card as HTMLDivElement) ?? 0,
          zIndex: (index) => index + 1,
          onComplete: () => {
            gsap.set(cards, {
              clearProps: "transform,transition,pointer-events,z-index",
            });
          },
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            once: true,
          },
        },
      );

      return () => {
        animation.scrollTrigger?.kill();
        animation.kill();
      };
    },
    { dependencies: [totalCards], scope: sectionRef },
  );

  return {
    sectionRef,
    setCardRef,
  };
};

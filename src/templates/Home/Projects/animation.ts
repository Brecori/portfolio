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
      const cards = cardRefs.current.filter((card): card is HTMLDivElement =>
        Boolean(card),
      );

      if (!sectionRef.current || cards.length === 0) {
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(cards, { clearProps: "all", opacity: 1 });
        return;
      }

      const animations = cards.map((card, index) =>
        gsap.fromTo(
          card,
          {
            pointerEvents: "none",
            transition: "none",
            x: index % 2 === 0 ? -120 : 120,
            zIndex: index + 1,
          },
          {
            duration: 1.15,
            ease: "power3.inOut",
            opacity: 1,
            x: 0,
            zIndex: index + 1,
            onComplete: () => {
              gsap.set(card, {
                clearProps: "transform,transition,pointer-events,z-index",
              });
            },
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              once: true,
            },
          },
        ),
      );

      return () => {
        animations.forEach((animation) => {
          animation.scrollTrigger?.kill();
          animation.kill();
        });

        gsap.set(cards, {
          clearProps: "transform,transition,pointer-events,z-index",
        });
      };
    },
    { dependencies: [totalCards], scope: sectionRef },
  );

  return {
    sectionRef,
    setCardRef,
  };
};

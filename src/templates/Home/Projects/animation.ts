import { useCallback, useEffect, useRef } from "react";

export default (totalCards: number) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const setCardRef = useCallback(
    (index: number) => (element: HTMLDivElement | null) => {
      cardRefs.current[index] = element;
    },
    [],
  );

  useEffect(() => {
    let active = true;
    let cleanup: (() => void) | undefined;

    const initialize = async () => {
      const cards = cardRefs.current.filter((card): card is HTMLDivElement =>
        Boolean(card),
      );

      if (!sectionRef.current || cards.length === 0) {
        return;
      }

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (!active) return;
      gsap.registerPlugin(ScrollTrigger);

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

      cleanup = () => {
        animations.forEach((animation) => {
          animation.scrollTrigger?.kill();
          animation.kill();
        });

        gsap.set(cards, {
          clearProps: "transform,transition,pointer-events,z-index",
        });
      };
    };

    void initialize();

    return () => {
      active = false;
      cleanup?.();
    };
  }, [totalCards]);

  return {
    sectionRef,
    setCardRef,
  };
};

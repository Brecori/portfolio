import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default (totalCards: number) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const setCardRef = useCallback(
    (index: number) => (element: HTMLButtonElement | null) => {
      cardRefs.current[index] = element;
    },
    [],
  );

  useGSAP(
    () => {
      const section = sectionRef.current;
      const cards = cardRefs.current.filter((card): card is HTMLButtonElement =>
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

      const middleIndex = (totalCards - 1) / 2;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      timeline.fromTo(
        cards,
        {
          opacity: 0,
          rotate: (index) => (middleIndex - index) * 6,
          scale: 0.84,
          transformOrigin: "50% 100%",
          y: 60,
        },
        {
          duration: 1.2,
          ease: "power3.out",
          opacity: 1,
          rotate: 0,
          scale: 1,
          stagger: 0.25,
          y: 0,
        },
      );

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    },
    { dependencies: [totalCards], scope: sectionRef },
  );

  return {
    sectionRef,
    setCardRef,
  };
};

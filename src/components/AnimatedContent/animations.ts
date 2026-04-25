import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useRef, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default (
  delay: number = 0,
  duration?: number,
  stagger?: number,
  startPosition: number = 95,
  preventReAnimate: boolean = false,
  isMobile?: boolean,
  onAnimationComplete?: () => void,
) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const hasAnimatedRef = useRef(false);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const setItemRefs = useCallback(
    (index: number) => (element: HTMLDivElement | null) => {
      if (element) {
        itemRefs.current[index] = element;
      }
    },
    [],
  );

  useGSAP(() => {
    if (
      !containerRef.current ||
      itemRefs.current.length === 0 ||
      animationRef.current ||
      (preventReAnimate && hasAnimatedRef.current)
    ) {
      return;
    }

    triggerRef.current = ScrollTrigger.create({
      trigger: containerRef.current,
      start: `top ${startPosition}%`,
      once: true,
      onEnter: () => {
        if (preventReAnimate && hasAnimatedRef.current) return;
        if (animationRef.current) return;

        const isDesktop = window.matchMedia("(min-width: 769px)").matches;

        const defaultDuration = isDesktop ? 2.5 : 0.8;
        const defaultStagger = isDesktop ? 0.2 : 0.1;

        const calculatedDuration = duration
          ? isDesktop
            ? duration
            : duration * 0.32
          : defaultDuration;

        const calculatedStagger = stagger
          ? isDesktop
            ? stagger
            : stagger * 0.5
          : defaultStagger;

        animationRef.current = gsap.to(itemRefs.current, {
          opacity: 1,
          y: 0,
          duration: calculatedDuration,
          stagger: calculatedStagger,
          delay,
          ease: "power1.out",
          onComplete: () => {
            hasAnimatedRef.current = true;
            setHasAnimated(true);
            onAnimationComplete?.();
            animationRef.current = null;
          },
        });
      },
    });

    return () => {
      if (isMobile !== undefined) {
        hasAnimatedRef.current = false;
        setHasAnimated(false);
      }

      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }

      if (triggerRef.current) {
        triggerRef.current.kill();
        triggerRef.current = null;
      }
    };
  }, [
    delay,
    duration,
    stagger,
    startPosition,
    preventReAnimate,
    isMobile,
    onAnimationComplete,
  ]);

  return {
    containerRef,
    setItemRefs,
    hasAnimated,
  };
};

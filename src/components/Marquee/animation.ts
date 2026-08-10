import { useEffect, useRef } from "react";
import type { MarqueeProps, MarqueeSpeed } from "./props";
import C from "./constants";

const clampSpeed = (speed: number): MarqueeSpeed => {
  if (speed < 1) {
    return 1;
  }

  if (speed > 10) {
    return 10;
  }

  return speed as MarqueeSpeed;
};

const getDurationFromSpeed = (speed: MarqueeSpeed): number => {
  return 52 - speed * 4;
};

const getTravelPositions = (
  direction: NonNullable<MarqueeProps["direction"]>,
  distance: number,
) => {
  return direction === "left"
    ? { from: 0, to: -distance }
    : { from: -distance, to: 0 };
};

export default ({
  direction = "left",
  speed = 5,
}: MarqueeProps) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstGroupRef = useRef<HTMLDivElement | null>(null);
  const safePhrases = C.phrases.filter(Boolean);
  const normalizedSpeed = clampSpeed(speed);
  const duration = getDurationFromSpeed(normalizedSpeed);

  useEffect(() => {
    let active = true;
    let cleanup: (() => void) | undefined;

    const initialize = async () => {
      if (safePhrases.length === 0) {
        return;
      }

      const track = trackRef.current;
      const firstGroup = firstGroupRef.current;

      if (!track || !firstGroup) {
        return;
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const { default: gsap } = await import("gsap");
      if (!active) return;

      const buildAnimation = () => {
        const distance = firstGroup.offsetWidth;

        if (!distance) {
          return;
        }

        const { from, to } = getTravelPositions(direction, distance);

        gsap.killTweensOf(track);
        gsap.set(track, { x: from });
        gsap.to(track, {
          x: to,
          duration,
          ease: "none",
          repeat: -1,
        });
      };

      buildAnimation();

      const resizeObserver = new ResizeObserver(() => {
        buildAnimation();
      });

      resizeObserver.observe(firstGroup);

      cleanup = () => {
        resizeObserver.disconnect();
        gsap.killTweensOf(track);
        gsap.set(track, { clearProps: "transform" });
      };
    };

    void initialize();

    return () => {
      active = false;
      cleanup?.();
    };
  }, [direction, duration, safePhrases]);

  return {
    containerRef,
    trackRef,
    firstGroupRef,
    safePhrases,
  };
};

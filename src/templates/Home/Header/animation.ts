import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";

export default (titlesLength: number) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [titleIndex, setTitleIndex] = useState(0);
  const [canRotateTitle, setCanRotateTitle] = useState(false);

  const handleInitialAnimationComplete = useCallback(() => {
    setCanRotateTitle(true);
  }, []);

  useEffect(() => {
    if (!canRotateTitle) {
      return;
    }

    if (titlesLength <= 1) {
      return;
    }

    const titleElement = titleRef.current;

    const interval = window.setInterval(() => {
      if (!titleElement) {
        return;
      }

      gsap.to(titleElement, {
        autoAlpha: 0,
        y: -18,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          setTitleIndex((currentIndex) => (currentIndex + 1) % titlesLength);

          window.requestAnimationFrame(() => {
            gsap.fromTo(
              titleElement,
              { autoAlpha: 0, y: 18 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
              },
            );
          });
        },
      });
    }, 5000);

    return () => {
      window.clearInterval(interval);
      gsap.killTweensOf(titleElement);
    };
  }, [canRotateTitle, titlesLength]);

  return {
    handleInitialAnimationComplete,
    isPurpleTitle: titleIndex === 1,
    titleIndex,
    titleRef,
  };
};

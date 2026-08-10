import { useCallback, useEffect, useRef, useState } from "react";

export default (titlesLength: number) => {
  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const [titleIndex, setTitleIndex] = useState(0);
  const [canRotateTitle, setCanRotateTitle] = useState(false);

  const handleInitialAnimationComplete = useCallback(() => {
    setCanRotateTitle(true);
  }, []);

  useEffect(() => {
    let interval: number | undefined;
    let active = true;

    const initialize = async () => {
      if (!canRotateTitle) {
        return;
      }

      if (titlesLength <= 1) {
        return;
      }

      const titleElement = titleRef.current;

      if (!titleElement) {
        return;
      }

      const { default: gsap } = await import("gsap");
      if (!active) return;

      const rotateTitle = () => {
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
      };

      interval = window.setInterval(rotateTitle, 5000);
    };

    void initialize();

    return () => {
      active = false;
      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, [canRotateTitle, titlesLength]);

  return {
    handleInitialAnimationComplete,
    titleIndex,
    titleRef,
  };
};

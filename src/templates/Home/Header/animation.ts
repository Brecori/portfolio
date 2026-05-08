import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCallback, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

export default (titlesLength: number) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [titleIndex, setTitleIndex] = useState(0);
  const [canRotateTitle, setCanRotateTitle] = useState(false);

  const handleInitialAnimationComplete = useCallback(() => {
    setCanRotateTitle(true);
  }, []);

  useGSAP(
    (_, contextSafe) => {
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

      if (!contextSafe) {
        return;
      }

      const rotateTitle = contextSafe(() => {
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

            window.requestAnimationFrame(
              contextSafe(() => {
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
              }),
            );
          },
        });
      });

      const interval = window.setInterval(rotateTitle, 5000);

      return () => {
        window.clearInterval(interval);
      };
    },
    {
      dependencies: [canRotateTitle, titlesLength],
      revertOnUpdate: true,
      scope: titleRef,
    },
  );

  return {
    handleInitialAnimationComplete,
    isPurpleTitle: titleIndex === 1,
    titleIndex,
    titleRef,
  };
};

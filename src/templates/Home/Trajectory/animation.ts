import { useEffect, useRef, useState } from "react";

export default () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  useEffect(() => {
    let active = true;
    let cleanup: (() => void) | undefined;

    const initialize = async () => {
      const section = sectionRef.current;
      const timeline = timelineRef.current;

      if (!section || !timeline) {
        return;
      }

      const marker = timeline.querySelector<HTMLElement>(
        "[data-trajectory-marker]",
      );

      if (!marker) {
        return;
      }

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (!active) return;
      gsap.registerPlugin(ScrollTrigger);

      const updateActiveYear = () => {
        const yearGroups = Array.from(
          timeline.querySelectorAll<HTMLElement>("[data-trajectory-year]"),
        );
        const markerTop = window.innerHeight * 0.4;
        const nextActiveYearIndex = yearGroups.reduce(
          (activeIndex, yearGroup, index) => {
            if (yearGroup.getBoundingClientRect().top <= markerTop) {
              return index;
            }

            return activeIndex;
          },
          0,
        );

        setActiveYearIndex((currentIndex) =>
          currentIndex === nextActiveYearIndex
            ? currentIndex
            : nextActiveYearIndex,
        );
      };

      gsap.set(marker, { y: 0 });
      setActiveYearIndex(0);

      const createScrollAnimation = () => {
        const markerTrigger = ScrollTrigger.create({
          trigger: timeline,
          start: "top 40%",
          end: "bottom 18%",
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: ({ progress }) => {
            const travelDistance = Math.max(
              0,
              timeline.offsetHeight - marker.offsetHeight,
            );

            gsap.set(marker, { y: progress * travelDistance });
            updateActiveYear();
          },
        });

        const activeTrigger = ScrollTrigger.create({
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          onEnter: updateActiveYear,
          onEnterBack: updateActiveYear,
          onLeaveBack: () => setActiveYearIndex(0),
          onUpdate: updateActiveYear,
          onRefresh: updateActiveYear,
        });

        ScrollTrigger.refresh();

        return () => {
          markerTrigger.kill();
          activeTrigger.kill();
        };
      };

      let cleanupScrollAnimation: (() => void) | undefined;

      if (!("IntersectionObserver" in window)) {
        cleanupScrollAnimation = createScrollAnimation();
        cleanup = () => {
          cleanupScrollAnimation?.();
          gsap.set(marker, { clearProps: "transform" });
        };
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
        gsap.set(marker, { clearProps: "transform" });
      };
    };

    void initialize();
    return () => {
      active = false;
      cleanup?.();
    };
  }, []);

  return {
    activeYearIndex,
    sectionRef,
    titleRef,
    timelineRef,
  };
};

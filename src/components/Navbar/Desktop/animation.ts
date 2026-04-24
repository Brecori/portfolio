import { ThemeMode } from "@/contexts/theme-provider/props";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default (mode: ThemeMode) => {
  const themeIconRef = useRef<SVGSVGElement | null>(null);
  const themeTextRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      if (!themeIconRef.current || !themeTextRef.current) {
        return;
      }

      const timeline = gsap.timeline();

      timeline
        .fromTo(
          themeIconRef.current,
          { autoAlpha: 0, scale: 0.65, rotate: -45 },
          {
            autoAlpha: 1,
            scale: 1,
            rotate: 0,
            duration: 0.35,
            ease: "back.out(1.7)",
          },
        )
        .fromTo(
          themeTextRef.current,
          { autoAlpha: 0, y: 6 },
          { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out" },
          "<0.05",
        );
    },
    { dependencies: [mode], revertOnUpdate: true },
  );

  return { themeIconRef, themeTextRef };
};

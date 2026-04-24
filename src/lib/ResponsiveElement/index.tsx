"use client";

import { FC, useEffect, useLayoutEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ResponsiveElementProps } from "./props";
import { viewportsBase } from "@/constants/viewport-base";

const canUseDOM = typeof window !== "undefined";
const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

export const ResponsiveElement: FC<ResponsiveElementProps> = ({
  breakpoints,
  content,
}) => {
  const [isClient, setClient] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: viewportsBase.mobile.width });
  const isTablet = useMediaQuery({ maxWidth: viewportsBase.tablet.width });

  const isIpadVertical = useMediaQuery({
    query: `(max-width: ${viewportsBase.ipadVertical.width}px) and (orientation: portrait)`,
  });

  const isMobileVerticalHorizontal = useMediaQuery({
    query: `(max-width: ${viewportsBase.mobile.width}px), (max-height: ${viewportsBase.mobile.width}px)`,
  });

  const isDesktop1024 = useMediaQuery({
    maxWidth: viewportsBase.desktop1024.width,
  });
  const isDesktop1280 = useMediaQuery({
    maxWidth: viewportsBase.desktop1280.width,
  });
  const isDesktop1440 = useMediaQuery({
    maxWidth: viewportsBase.desktop1440.width,
  });
  const isDesktop1920 = useMediaQuery({
    maxWidth: viewportsBase.desktop1920.width,
  });
  const isDesktop2560 = useMediaQuery({
    maxWidth: viewportsBase.desktop2560.width,
  });

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== "undefined") {
      setClient(true);
    }
  }, []);

  const getResponsiveElement = () => {
    if (breakpoints?.mobile && isMobile) {
      return breakpoints.mobile;
    }

    if (breakpoints?.tablet && isTablet) {
      return breakpoints.tablet;
    }

    if (breakpoints?.ipadVertical && isIpadVertical) {
      return breakpoints.ipadVertical;
    }

    if (breakpoints?.mobileVerticalHorizontal && isMobileVerticalHorizontal) {
      return breakpoints.mobileVerticalHorizontal;
    }

    if (breakpoints?.desktop1024 && isDesktop1024) {
      return breakpoints.desktop1024;
    }

    if (breakpoints?.desktop1280 && isDesktop1280) {
      return breakpoints.desktop1280;
    }

    if (breakpoints?.desktop1440 && isDesktop1440) {
      return breakpoints.desktop1440;
    }

    if (breakpoints?.desktop1920 && isDesktop1920) {
      return breakpoints.desktop1920;
    }

    if (breakpoints?.desktop2560 && isDesktop2560) {
      return breakpoints.desktop2560;
    }

    return content;
  };

  return <>{isClient ? getResponsiveElement() : content}</>;
};

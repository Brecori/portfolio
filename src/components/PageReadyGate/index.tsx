"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { PageLoader } from "@/components/PageLoader";
import {
  PAGE_LOADER_FADE_OUT_MS,
  PAGE_LOADER_MIN_VISIBLE_MS,
} from "@/constants/page-loader";

type PageReadyGateProps = {
  children: ReactNode;
};

export const PageReadyGate = ({ children }: PageReadyGateProps) => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [isLoaderMounted, setIsLoaderMounted] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const hideTimeoutId = window.setTimeout(() => {
      document.body.style.overflow = previousOverflow;
      setIsLoaderVisible(false);
    }, PAGE_LOADER_MIN_VISIBLE_MS);

    const unmountTimeoutId = window.setTimeout(() => {
      setIsLoaderMounted(false);
    }, PAGE_LOADER_MIN_VISIBLE_MS + PAGE_LOADER_FADE_OUT_MS);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(hideTimeoutId);
      window.clearTimeout(unmountTimeoutId);
    };
  }, []);

  return (
    <>
      {children}
      {isLoaderMounted && <PageLoader visible={isLoaderVisible} />}
    </>
  );
};

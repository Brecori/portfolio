"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { PageLoader } from "@/components/PageLoader";
import type { PageLoaderHandle } from "@/components/PageLoader/props";
import * as S from "./styles";

type PageReadyGateProps = {
  children: ReactNode;
};

const MIN_VISIBLE_MS = 350;
const PROGRESS_INTERVAL_MS = 8;
const REVEAL_DELAY_MS = 60;

export const PageReadyGate = ({ children }: PageReadyGateProps) => {
  const [isReady, setIsReady] = useState(false);
  const loaderRef = useRef<PageLoaderHandle | null>(null);

  useEffect(() => {
    const start = window.performance.now();
    const previousOverflow = document.body.style.overflow;
    let displayedProgress = 0;
    let isSettled = false;
    let revealTimeoutId: number | undefined;
    let timeoutId: number | undefined;
    let completionIntervalId: number | undefined;
    const intervalId = window.setInterval(() => {
      if (isSettled || displayedProgress >= 94) {
        return;
      }

      displayedProgress += 1;
      loaderRef.current?.setProgress(displayedProgress);
    }, PROGRESS_INTERVAL_MS);

    document.body.style.overflow = "hidden";

    const revealPage = () => {
      isSettled = true;

      const elapsed = window.performance.now() - start;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);

      revealTimeoutId = window.setTimeout(() => {
        completionIntervalId = window.setInterval(() => {
          displayedProgress = Math.min(100, displayedProgress + 1);
          loaderRef.current?.setProgress(displayedProgress);

          if (displayedProgress === 100) {
            window.clearInterval(completionIntervalId);
            timeoutId = window.setTimeout(() => {
              document.body.style.overflow = previousOverflow;
              setIsReady(true);
            }, REVEAL_DELAY_MS);
          }
        }, PROGRESS_INTERVAL_MS);
      }, remaining);
    };

    if (document.readyState === "complete") {
      revealPage();
    } else {
      window.addEventListener("load", revealPage, { once: true });
    }

    return () => {
      window.removeEventListener("load", revealPage);
      document.body.style.overflow = previousOverflow;
      window.clearInterval(intervalId);

      if (revealTimeoutId) {
        window.clearTimeout(revealTimeoutId);
      }

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      if (completionIntervalId) {
        window.clearInterval(completionIntervalId);
      }
    };
  }, []);

  return (
    <S.Root>
      <S.Content $ready={isReady}>{children}</S.Content>
      {!isReady && <PageLoader ref={loaderRef} />}
    </S.Root>
  );
};

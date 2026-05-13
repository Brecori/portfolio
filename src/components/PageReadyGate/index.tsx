"use client";

import { ReactNode, useEffect, useState } from "react";
import { PageLoader } from "@/components/PageLoader";
import * as S from "./styles";

type PageReadyGateProps = {
  children: ReactNode;
};

const MIN_VISIBLE_MS = 700;

export const PageReadyGate = ({ children }: PageReadyGateProps) => {
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = window.performance.now();
    const previousOverflow = document.body.style.overflow;
    let isSettled = false;
    let revealTimeoutId: number | undefined;
    let timeoutId: number | undefined;
    const intervalId = window.setInterval(() => {
      setProgress((currentProgress) => {
        if (isSettled || currentProgress >= 94) {
          return currentProgress;
        }

        if (currentProgress < 48) {
          return currentProgress + 4;
        }

        if (currentProgress < 76) {
          return currentProgress + 2;
        }

        return currentProgress + 1;
      });
    }, 48);

    document.body.style.overflow = "hidden";

    const revealPage = () => {
      isSettled = true;

      const elapsed = window.performance.now() - start;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);

      revealTimeoutId = window.setTimeout(() => {
        setProgress(100);

        timeoutId = window.setTimeout(() => {
          document.body.style.overflow = previousOverflow;
          setIsReady(true);
        }, 220);
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
    };
  }, []);

  return (
    <S.Root>
      <S.Content $ready={isReady}>{children}</S.Content>
      {!isReady && <PageLoader progress={progress} />}
    </S.Root>
  );
};

"use client";

import { ReactNode, useEffect, useState } from "react";
import { PageLoader } from "@/components/PageLoader";
import * as S from "./styles";

type PageReadyGateProps = {
  children: ReactNode;
};

const MIN_VISIBLE_MS = 350;
const FADE_OUT_MS = 450;

export const PageReadyGate = ({ children }: PageReadyGateProps) => {
  const [isReady, setIsReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const startedAt = window.performance.now();
    const previousOverflow = document.body.style.overflow;
    let revealTimeoutId: number | undefined;
    let unmountTimeoutId: number | undefined;

    document.body.style.overflow = "hidden";

    const reveal = () => {
      const elapsed = window.performance.now() - startedAt;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);

      revealTimeoutId = window.setTimeout(() => {
        document.body.style.overflow = previousOverflow;
        setIsReady(true);

        unmountTimeoutId = window.setTimeout(() => {
          setShowLoader(false);
        }, FADE_OUT_MS);
      }, remaining);
    };

    if (document.readyState === "complete") {
      reveal();
    } else {
      window.addEventListener("load", reveal, { once: true });
    }

    return () => {
      window.removeEventListener("load", reveal);
      document.body.style.overflow = previousOverflow;

      if (revealTimeoutId) {
        window.clearTimeout(revealTimeoutId);
      }

      if (unmountTimeoutId) {
        window.clearTimeout(unmountTimeoutId);
      }
    };
  }, []);

  return (
    <S.Root>
      <S.Content $ready={isReady}>{children}</S.Content>
      {showLoader && <PageLoader visible={!isReady} />}
    </S.Root>
  );
};

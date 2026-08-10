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
    const previousScrollRestoration = window.history.scrollRestoration;
    let revealTimeoutId: number | undefined;
    let unmountTimeoutId: number | undefined;

    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    const reveal = () => {
      const elapsed = window.performance.now() - startedAt;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);

      revealTimeoutId = window.setTimeout(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = previousOverflow;
        setIsReady(true);

        if (!window.matchMedia("(pointer: coarse), (max-width: 600px)").matches) {
          window.requestAnimationFrame(() => {
            void import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
              ScrollTrigger.refresh();
            });
          });
        }

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
      window.history.scrollRestoration = previousScrollRestoration;
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
      <S.Content $ready={isReady}>{isReady ? children : null}</S.Content>
      {showLoader && <PageLoader visible={!isReady} />}
    </S.Root>
  );
};

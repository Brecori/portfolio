import { useGSAP } from "@gsap/react";
import { FC, useMemo, useRef } from "react";
import gsap from "gsap";
import type { MarqueeProps, MarqueeSpeed } from "./props";
import * as S from "./styles";

gsap.registerPlugin(useGSAP);

const clampSpeed = (speed: number): MarqueeSpeed => {
  if (speed < 1) {
    return 1;
  }

  if (speed > 10) {
    return 10;
  }

  return speed as MarqueeSpeed;
};

const getDurationFromSpeed = (speed: MarqueeSpeed): number => {
  return 52 - speed * 4;
};

const getTravelPositions = (
  direction: NonNullable<MarqueeProps["direction"]>,
  distance: number,
) => {
  return direction === "left"
    ? { from: 0, to: -distance }
    : { from: -distance, to: 0 };
};

export const Marquee: FC<MarqueeProps> = ({
  direction = "left",
  phrases,
  speed = 5,
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstGroupRef = useRef<HTMLDivElement | null>(null);
  const safePhrases = useMemo(() => phrases.filter(Boolean), [phrases]);
  const normalizedSpeed = clampSpeed(speed);
  const duration = getDurationFromSpeed(normalizedSpeed);

  useGSAP(
    () => {
      if (safePhrases.length === 0) {
        return;
      }

      const track = trackRef.current;
      const firstGroup = firstGroupRef.current;

      if (!track || !firstGroup) {
        return;
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(track, { clearProps: "transform" });
        return;
      }

      const buildAnimation = () => {
        const distance = firstGroup.offsetWidth;

        if (!distance) {
          return;
        }

        const { from, to } = getTravelPositions(direction, distance);

        gsap.killTweensOf(track);
        gsap.set(track, { x: from });
        gsap.to(track, {
          x: to,
          duration,
          ease: "none",
          repeat: -1,
        });
      };

      buildAnimation();

      const resizeObserver = new ResizeObserver(() => {
        buildAnimation();
      });

      resizeObserver.observe(firstGroup);

      return () => {
        resizeObserver.disconnect();
        gsap.killTweensOf(track);
        gsap.set(track, { clearProps: "transform" });
      };
    },
    {
      dependencies: [direction, duration, safePhrases],
      scope: containerRef,
    },
  );

  if (safePhrases.length === 0) {
    return null;
  }

  return (
    <S.Container aria-label={safePhrases.join(" / ")} ref={containerRef}>
      <S.Track ref={trackRef}>
        {[0, 1].map((copyIndex) => (
          <S.PhraseGroup
            aria-hidden={copyIndex === 1}
            key={copyIndex}
            ref={copyIndex === 0 ? firstGroupRef : undefined}
          >
            {safePhrases.map((phrase, phraseIndex) => (
              <FragmentItem
                key={`${copyIndex}-${phrase}-${phraseIndex}`}
                phrase={phrase}
              />
            ))}
          </S.PhraseGroup>
        ))}
      </S.Track>
    </S.Container>
  );
};

type FragmentItemProps = {
  phrase: string;
};

const FragmentItem: FC<FragmentItemProps> = ({ phrase }) => {
  return (
    <>
      <S.Phrase>{phrase}</S.Phrase>
      <S.Separator aria-hidden />
    </>
  );
};

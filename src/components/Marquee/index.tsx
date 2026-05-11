import { FC, Fragment } from "react";
import useAnimation from "./animation";
import type { MarqueeProps } from "./props";
import * as S from "./styles";

export const Marquee: FC<MarqueeProps> = ({
  direction = "left",
  speed = 5,
}) => {
  const { containerRef, trackRef, firstGroupRef, safePhrases } = useAnimation({
    direction,
    speed,
  });

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
              <Fragment key={`${copyIndex}-${phrase}-${phraseIndex}`}>
                <S.Phrase>{phrase}</S.Phrase>
                <S.Separator aria-hidden />
              </Fragment>
            ))}
          </S.PhraseGroup>
        ))}
      </S.Track>
    </S.Container>
  );
};

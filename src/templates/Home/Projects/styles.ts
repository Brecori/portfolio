import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import styled, { css } from "styled-components";

export const ProjectsSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10rem;
  padding: 12rem 15rem 0rem;
  overflow: clip;

  ${mediaMaxDesktop1024`
    padding: 10rem 7.5rem;
  `}

  ${mediaMaxMobile`
    gap: 3.6rem;
    padding: 8rem 2.4rem;
  `}
`;

export const ProjectsIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${mediaMaxMobile`
    gap: 2.8rem;
  `}
`;

export const ProjectsDeckDescription = styled.p`
  max-width: 54rem;
  color: ${({ theme }) => theme.submarine};
  font-size: clamp(1.8rem, 1.8vw, 2.4rem);
  line-height: 1.45;

  ${mediaMaxMobile`
    font-size: 1.7rem;
  `}
`;

export const CardsRail = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  place-items: center;
  min-height: 58rem;
  isolation: isolate;

  ${mediaMaxDesktop1024`
    min-height: 50rem;
  `}

  ${mediaMaxMobile`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2rem;
    min-height: 46rem;
  `}
`;

export const CardSlot = styled.div<{
  $index: number;
  $isHighlighted: boolean;
  $offset: number;
}>`
  grid-area: 1 / 1;
  width: clamp(24rem, 23vw, 34rem);
  opacity: 0;
  z-index: ${({ $index, $isHighlighted }) =>
    $isHighlighted ? 20 : $index + 1};
  --deck-offset: ${({ $offset }) => $offset};
  --deck-lift: ${({ $offset }) => $offset * $offset * 0.7}rem;
  --deck-spacing: 20rem;
  --selected-scale: 1.08;
  --selected-y: -10rem;
  transform: translateX(calc(var(--deck-offset) * var(--deck-spacing)));
  transform-origin: 50% 110%;
  transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);

  ${({ $isHighlighted }) =>
    $isHighlighted &&
    css`
      transform: translate3d(0, var(--selected-y), 0) rotate(0deg)
        scale(var(--selected-scale));
    `}

  ${mediaMaxDesktop1024`
    width: clamp(22rem, 27vw, 29rem);
    --deck-spacing: 10rem;
    --selected-scale: 1.06;
    --selected-y: -5rem;
  `}

  ${mediaMaxMobile`
    grid-area: auto;
    width: 100%;
    --deck-offset: 0;
    --deck-spacing: 0rem;
    --selected-scale: 1;
    --selected-y: 0rem;
  `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transition: none;
  }
`;

export const CardButton = styled.button`
  position: relative;
  display: block;
  width: 100%;
  transform-origin: center bottom;
  text-align: left;

  &:focus-visible {
    outline: 0.2rem solid ${({ theme }) => theme.fantasia};
    outline-offset: 0.35rem;
  }
`;

export const CardSurface = styled.div<{
  $hasHighlight: boolean;
  $isHighlighted: boolean;
}>`
  position: relative;
  aspect-ratio: 0.72;
  overflow: hidden;
  border-radius: 0.2rem;
  border: 0.1rem solid
    ${({ theme, $isHighlighted }) =>
      $isHighlighted ? `${theme.fantasia}88` : theme.techWhite10};
  background: ${({ theme }) => theme.codGray};
  box-shadow: ${({ $isHighlighted }) =>
    $isHighlighted
      ? "0 5rem 8rem rgba(0, 0, 0, 0.5)"
      : "0 2.6rem 5rem rgba(0, 0, 0, 0.22)"};
  filter: ${({ $hasHighlight, $isHighlighted }) =>
    $hasHighlight && !$isHighlighted
      ? "brightness(0.48) saturate(0.65)"
      : "none"};
  opacity: ${({ $hasHighlight, $isHighlighted }) =>
    $hasHighlight && !$isHighlighted ? 0.72 : 1};
  transition:
    transform 0.28s ease,
    border-color 0.28s ease,
    box-shadow 0.28s ease,
    filter 0.4s ease,
    opacity 0.4s ease;
  will-change: transform;

  ${mediaMaxMobile`
    aspect-ratio: 1.72;
  `}

  @media (min-width: 601px) {
    ${CardButton}:hover &,
    ${CardButton}:focus-visible & {
      border-color: ${({ theme }) => `${theme.fantasia}66`};
      box-shadow: 0 3.2rem 5.8rem rgba(0, 0, 0, 0.3);
      filter: brightness(1.04);
      transform: translateY(-1.6rem);
    }
  }
`;

export const CardIndex = styled.span`
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
  z-index: 2;
  color: ${({ theme }) => theme.techWhite};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  ${mediaMaxMobile`
    top: 1.6rem;
    left: 1.6rem;
    font-size: 1.4rem;
  `}
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.85) brightness(0.74);
`;

export const CardShade = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(16, 16, 16, 0.08) 0%,
      rgba(16, 16, 16, 0.16) 28%,
      rgba(16, 16, 16, 0.84) 100%
    ),
    linear-gradient(
      90deg,
      rgba(16, 16, 16, 0.28) 0%,
      transparent 28%,
      transparent 70%,
      rgba(16, 16, 16, 0.4) 100%
    );
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 1.2rem;
  max-height: 88%;
  padding: 1.8rem 1.6rem;

  ${mediaMaxMobile`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.techWhite};
  font-size: clamp(2.2rem, 2vw, 3.2rem);
  font-weight: 400;
  letter-spacing: -0.04em;
  line-height: 0.94;
  writing-mode: vertical-rl;
  transform: rotate(180deg);

  ${mediaMaxMobile`
    font-size: 3.2rem;
    writing-mode: horizontal-tb;
    transform: none;
  `}
`;

export const CardSummary = styled.p`
  color: ${({ theme }) => theme.submarine};
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.2;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  transform: rotate(180deg);

  ${mediaMaxMobile`
    font-size: 1.4rem;
    writing-mode: horizontal-tb;
    transform: none;
  `}
`;

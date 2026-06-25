import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import { theme } from "@/styles/theme";
import styled from "styled-components";

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
  color: ${theme.submarine};
  font-size: 2.4rem;
  line-height: 1.45;

  ${mediaMaxDesktop1024`
    font-size: 2rem;
  `}

  ${mediaMaxMobile`
    font-size: 1.7rem;
  `}
`;

export const CardsRail = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 8rem;
  width: 100%;
  isolation: isolate;

  ${mediaMaxDesktop1024`
    gap: 6rem;
  `}

  ${mediaMaxMobile`
    gap: 4rem;
  `}
`;

export const CardSlot = styled.div<{
  $index: number;
  $isHighlighted: boolean;
  $isReversed: boolean;
}>`
  width: 132rem;
  justify-self: ${({ $isReversed }) => ($isReversed ? "end" : "start")};
  opacity: 0;
  z-index: ${({ $index, $isHighlighted }) =>
    $isHighlighted ? 20 : $index + 1};
  transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);

  ${mediaMaxDesktop1024`
    width: 100%;
  `}

  ${mediaMaxMobile`
    width: 100%;
    transform: none;
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
    outline: 0.2rem solid ${theme.fantasia};
    outline-offset: 0.35rem;
  }
`;

export const CardSurface = styled.div<{
  $hasHighlight: boolean;
  $isHighlighted: boolean;
  $isReversed: boolean;
}>`
  position: relative;
  display: grid;
  grid-template-columns: ${({ $isReversed }) =>
    $isReversed
      ? "minmax(0, 3fr) minmax(0, 2fr)"
      : "minmax(0, 2fr) minmax(0, 3fr)"};
  grid-template-areas: ${({ $isReversed }) =>
    $isReversed ? '"media content"' : '"content media"'};
  height: 42rem;
  overflow: hidden;
  border-radius: 0.2rem;
  background: ${theme.codGray};
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
    opacity 0.4s ease;
  will-change: transform;

  ${mediaMaxDesktop1024`
    height: 32rem;
  `}

  ${mediaMaxMobile`
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: repeat(2, 22rem);
    grid-template-areas:
      "media"
      "content";
    height: 44rem;
  `}

    ${CardButton}:hover &,
    ${CardButton}:focus-visible & {
    transform: translateX(
      ${({ $isReversed }) => ($isReversed ? "-1.6rem" : "1.6rem")}
    );

    ${mediaMaxDesktop1024`
      transform: none;
    `}
  }
`;

export const CardIndex = styled.span`
  color: ${theme.submarine};
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  ${mediaMaxMobile`
    font-size: 1.4rem;
  `}
`;

export const CardMedia = styled.div`
  position: relative;
  grid-area: media;
  min-width: 0;
  overflow: hidden;

  ${mediaMaxMobile`
    height: 100%;
  `}
`;

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1) saturate(0.35) brightness(0.7);
  transition:
    filter 0.45s ease,
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);

  ${CardButton}:hover &,
  ${CardButton}:focus-visible & {
    filter: grayscale(0.35) saturate(0.75) brightness(0.82);
    transform: scale(1.025);
  }
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
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.6rem;
  min-width: 0;
  height: 100%;
  padding: 7rem;
  background: ${theme.extremeBlack};
  font-family: var(--font-inter);

  ${mediaMaxDesktop1024`
    padding: 4rem;
  `}

  ${mediaMaxMobile`
    gap: 1.2rem;
    padding: 2.8rem 2.4rem 3.2rem;
  `}
`;

export const CardTitle = styled.h3`
  color: ${theme.techWhite};
  font-family: var(--font-neue);
  font-size: 8rem;
  font-weight: 400;
  letter-spacing: -0.055em;
  line-height: 0.86;
  overflow-wrap: anywhere;
  text-transform: uppercase;

  ${mediaMaxDesktop1024`
    font-size: 5.6rem;
  `}

  ${mediaMaxMobile`
    font-size: 4.8rem;
    line-height: 0.9;
  `}
`;

export const CardSummary = styled.p`
  color: ${theme.submarine};
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.4;
  text-transform: uppercase;

  ${mediaMaxDesktop1024`
    font-size: 1.4rem;
  `}

  ${mediaMaxMobile`
    font-size: 1.4rem;
  `}
`;

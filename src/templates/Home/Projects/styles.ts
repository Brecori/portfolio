import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import styled from "styled-components";

export const ProjectsSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10rem;
  padding: 12rem 15rem;
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
  gap: 2rem;
`;

export const ProjectsDeckHeading = styled.h3`
  color: ${({ theme }) => theme.techWhite};
  font-size: clamp(4rem, 5vw, 7.8rem);
  font-weight: 400;
  letter-spacing: -0.05em;
  line-height: 0.92;
`;

export const ProjectsDeckDescription = styled.p`
  color: ${({ theme }) => theme.submarine};
  font-size: 1.8rem;
  line-height: 1.6;

  ${mediaMaxMobile`
    font-size: 1.5rem;
  `}
`;

export const CardsRail = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.6rem;
  align-items: start;

  ${mediaMaxDesktop1024`
    grid-template-columns: repeat(3, minmax(0, 1fr));
  `}

  ${mediaMaxMobile`
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
  `}
`;

export const CardButton = styled.button`
  position: relative;
  display: block;
  width: 100%;
  opacity: 0;
  transform-origin: center bottom;
  text-align: left;

  &:focus-visible {
    outline: 0.2rem solid ${({ theme }) => theme.fantasia};
    outline-offset: 0.35rem;
  }
`;

export const CardSurface = styled.div<{ $isActive: boolean }>`
  position: relative;
  aspect-ratio: 0.72;
  overflow: hidden;
  border-radius: 0.2rem;
  border: 0.1rem solid
    ${({ theme, $isActive }) =>
      $isActive ? `${theme.fantasia}88` : theme.techWhite10};
  background: ${({ theme }) => theme.codGray};
  box-shadow: ${({ $isActive }) =>
    $isActive
      ? "0 4rem 7rem rgba(0, 0, 0, 0.34)"
      : "0 2.6rem 5rem rgba(0, 0, 0, 0.22)"};
  transition:
    transform 0.28s ease,
    border-color 0.28s ease,
    box-shadow 0.28s ease,
    filter 0.28s ease;
  will-change: transform;

  ${CardButton}:hover &,
  ${CardButton}:focus-visible & {
    border-color: ${({ theme }) => `${theme.fantasia}66`};
    box-shadow: 0 3.2rem 5.8rem rgba(0, 0, 0, 0.3);
    filter: brightness(1.04);
    transform: translateY(-1.6rem);
  }

  transform: ${({ $isActive }) =>
    $isActive ? "translateY(-1.6rem)" : "translateY(0)"};

  ${mediaMaxMobile`
    aspect-ratio: 1.72;
  `}
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
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.85) brightness(0.74);
`;

export const CardGlow = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at 50% 0%,
      ${({ theme }) => `${theme.fantasia}22`} 0%,
      transparent 38%
    ),
    radial-gradient(
      circle at 50% 100%,
      ${({ theme }) => `${theme.fantasia}16`} 0%,
      transparent 42%
    );
  mix-blend-mode: screen;
  opacity: 0.78;
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
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6rem 1.4rem;
`;

export const CardMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  color: ${({ theme }) => theme.submarine};
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const CardTitle = styled.h4`
  color: ${({ theme }) => theme.techWhite};
  font-size: clamp(2.2rem, 2vw, 3.2rem);
  font-weight: 400;
  letter-spacing: -0.04em;
  line-height: 0.94;
`;

export const CardSummary = styled.p`
  color: ${({ theme }) => theme.submarine};
  font-size: 1.3rem;
  line-height: 1.45;

  ${mediaMaxMobile`
    font-size: 1.2rem;
  `}
`;

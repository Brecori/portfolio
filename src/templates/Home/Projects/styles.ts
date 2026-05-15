import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import styled from "styled-components";

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 10rem 15rem;

  ${mediaMaxDesktop1024`
    padding: 10rem 7.5rem;
  `}

  ${mediaMaxMobile`
    gap: 3.2rem;
    padding: 8rem 2.4rem;
  `}
`;

export const ProjectsIntro = styled.div`
  width: fit-content;
`;

export const SlideMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.4rem;
  color: ${({ theme }) => theme.submarine};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const SlideTitle = styled.h3`
  color: ${({ theme }) => theme.techWhite};
  font-size: clamp(2.8rem, 3.8vw, 5.6rem);
  font-weight: 400;
  letter-spacing: -0.04em;
  line-height: 0.95;
`;

export const SlideDescription = styled.p`
  color: ${({ theme }) => theme.submarine};
  font-size: 1.55rem;
  line-height: 1.6;

  ${mediaMaxMobile`
    font-size: 1.4rem;
  `}
`;

export const SlideStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const SlideBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 3.6rem;
  padding: 0.8rem 1.4rem;
  border: 0.1rem solid ${({ theme }) => theme.techWhite10};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.techWhite10} 28%,
    transparent
  );
  color: ${({ theme }) => theme.techWhite};
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
`;

export const SlideLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  padding-top: 0.8rem;
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  min-height: 4.4rem;
  padding: 0 1.6rem;
  border: 0.1rem solid ${({ theme }) => theme.techWhite10};
  background: ${({ theme }) => theme.extremeBlack};
  color: ${({ theme }) => theme.techWhite};
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.fantasia};
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.fantasia} 14%,
      ${({ theme }) => theme.extremeBlack}
    );
    color: ${({ theme }) => theme.techWhite};
    transform: translateY(-0.2rem);
  }

  &:focus-visible {
    outline: 0.2rem solid ${({ theme }) => theme.fantasia};
    outline-offset: 0.2rem;
  }
`;

export const SliderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const SliderViewport = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 6rem 0 3rem;
  perspective: 180rem;

  ${mediaMaxMobile`
    padding: 2rem 0 1.6rem;
  `}
`;

export const SliderScene = styled.div`
  position: relative;
  height: 56rem;
  width: 100%;

  > div {
    height: 100%;
  }

  ${mediaMaxDesktop1024`
    height: 48rem;
  `}

  ${mediaMaxMobile`
    height: 42rem;
  `}
`;

export const SlideCard = styled.div<{
  $isActive: boolean;
  $offset: number;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: min(78vw, 112rem);
  aspect-ratio: 16 / 9;
  padding: 0;
  overflow: hidden;

  border-radius: 0.4rem;
  background: ${({ theme }) => theme.codGray};

  cursor: pointer;
  transform-style: preserve-3d;
  transition:
    transform 0.85s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.85s ease,
    filter 0.85s ease,
    border-color 0.4s ease,
    box-shadow 0.4s ease;
  transform: ${({ $offset }) => {
    const absOffset = Math.abs($offset);
    const translateX = $offset * 34;
    const translateZ = absOffset === 0 ? 0 : -22 * absOffset;
    const rotateY = $offset * -24;
    const scale = absOffset === 0 ? 1 : Math.max(0.72, 0.9 - absOffset * 0.08);

    return `translate3d(calc(-50% + ${translateX}rem), -50%, ${translateZ}rem) rotateY(${rotateY}deg) scale(${scale})`;
  }};
  opacity: ${({ $offset }) => {
    const absOffset = Math.abs($offset);

    if (absOffset > 2) {
      return 0;
    }

    if (absOffset === 2) {
      return 0.3;
    }

    if (absOffset === 1) {
      return 0.64;
    }

    return 1;
  }};
  filter: ${({ $isActive }) =>
    $isActive ? "brightness(1)" : "brightness(0.56)"};
  pointer-events: ${({ $offset }) => (Math.abs($offset) > 2 ? "none" : "auto")};
  z-index: ${({ $offset }) => 30 - Math.abs($offset)};

  &:hover,
  &:focus-visible {
    filter: brightness(0.92);
  }

  &:focus-visible {
    outline: 0.2rem solid ${({ theme }) => theme.fantasia};
    outline-offset: 0.3rem;
  }

  ${mediaMaxDesktop1024`
    width: min(88vw, 96rem);
    transform: ${({ $offset }) => {
      const absOffset = Math.abs($offset);
      const translateX = $offset * 24;
      const translateZ = absOffset === 0 ? 0 : -16 * absOffset;
      const rotateY = $offset * -18;
      const scale =
        absOffset === 0 ? 1 : Math.max(0.8, 0.92 - absOffset * 0.08);

      return `translate3d(calc(-50% + ${translateX}rem), -50%, ${translateZ}rem) rotateY(${rotateY}deg) scale(${scale})`;
    }};
  `}

  ${mediaMaxMobile`
    width: 100%;
    max-width: 100%;
    transform: translate3d(-50%, -50%, 0) scale(${({ $isActive }) =>
      $isActive ? 1 : 0.92});
    opacity: ${({ $isActive, $offset }) =>
      $isActive ? 1 : Math.abs($offset) === 1 ? 0.2 : 0};
  `}
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SlideOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      color-mix(in srgb, ${({ theme }) => theme.extremeBlack} 4%, transparent)
        0%,
      color-mix(in srgb, ${({ theme }) => theme.extremeBlack} 36%, transparent)
        48%,
      color-mix(in srgb, ${({ theme }) => theme.extremeBlack} 74%, transparent)
        100%
    ),
    linear-gradient(
      90deg,
      transparent 0%,
      transparent 58%,
      color-mix(in srgb, ${({ theme }) => theme.extremeBlack} 36%, transparent)
        100%
    );
`;

export const SlideContent = styled.div<{ $isActive: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.6rem;
  padding: 3.6rem;
  color: ${({ theme }) => theme.techWhite};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transform: translateY(${({ $isActive }) => ($isActive ? "0" : "2rem")});
  transition:
    opacity 0.55s ease,
    transform 0.55s ease,
    filter 0.55s ease;
  filter: ${({ $isActive }) => ($isActive ? "none" : "blur(0.05rem)")};

  ${mediaMaxMobile`
    gap: 1rem;
    padding: 2rem;
  `}
`;

export const SliderControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  ${mediaMaxMobile`
    gap: 1.2rem;
    flex-wrap: wrap;
  `}
`;

export const ControlButton = styled.button`
  min-width: 9.6rem;
  min-height: 4.4rem;
  padding: 0 1.6rem;
  border: 0.1rem solid ${({ theme }) => theme.techWhite10};
  background: transparent;
  color: ${({ theme }) => theme.techWhite};
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
  transition:
    border-color 0.3s ease,
    color 0.3s ease,
    background-color 0.3s ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.fantasia};
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.fantasia} 12%,
      transparent
    );
    color: ${({ theme }) => theme.techWhite};
  }

  &:focus-visible {
    outline: 0.2rem solid ${({ theme }) => theme.fantasia};
    outline-offset: 0.2rem;
  }
`;

export const ControlIndexes = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IndexButton = styled.button<{ $isActive: boolean }>`
  width: 4.2rem;
  height: 4.2rem;
  border: 0.1rem solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.fantasia : theme.techWhite10};
  background: ${({ theme, $isActive }) =>
    $isActive
      ? `color-mix(in srgb, ${theme.fantasia} 20%, transparent)`
      : "transparent"};
  color: ${({ theme }) => theme.techWhite};
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.fantasia};
  }

  &:focus-visible {
    outline: 0.2rem solid ${({ theme }) => theme.fantasia};
    outline-offset: 0.2rem;
  }
`;

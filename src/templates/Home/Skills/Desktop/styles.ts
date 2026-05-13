import { mediaMaxDesktop1024 } from "@/lib/media-query";
import styled, { keyframes } from "styled-components";

const backgroundWordFadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.035;
  }
`;

type OrbitSize = "medium" | "large";

export const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10rem 15rem;

  ${mediaMaxDesktop1024`
    padding: 10rem 7.5rem;
  `}
`;

export const OrbitArea = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  min-height: 94rem;

  ${mediaMaxDesktop1024`
    min-height: 74rem;
  `}
`;

export const BackgroundWord = styled.span`
  position: absolute;
  color: ${({ theme }) => theme.techWhite};
  font-size: 47rem;
  font-weight: 800;
  line-height: 1;
  text-transform: uppercase;
  opacity: 0;
  user-select: none;
  animation: ${backgroundWordFadeIn} 1.4s 0.25s ease-out forwards;

  ${mediaMaxDesktop1024`
    font-size: 29rem;
  `}
`;

export const OrbitRail = styled.span<{ $size: OrbitSize }>`
  position: absolute;
  width: ${({ $size }) => ($size === "large" ? "84rem" : "60rem")};
  aspect-ratio: 1;
  border: 0.1rem solid ${({ theme }) => theme.techWhite10};
  border-radius: 50%;
  opacity: ${({ $size }) => ($size === "large" ? 0.72 : 0.54)};

  ${mediaMaxDesktop1024`
    width: ${({ $size }) => ($size === "large" ? "64rem" : "46rem")};
  `}
`;

export const CenterCore = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 22rem;
  aspect-ratio: 1;
  border: 0.15rem solid
    color-mix(in srgb, ${({ theme }) => theme.submarine} 72%, transparent);
  border-radius: 50%;
  background:
    radial-gradient(
      circle,
      color-mix(in srgb, ${({ theme }) => theme.fantasia} 20%, transparent),
      transparent 72%
    ),
    ${({ theme }) => theme.codGray};
  box-shadow:
    0 0 10rem
      color-mix(in srgb, ${({ theme }) => theme.fantasia} 25%, transparent),
    inset 0 0 2.2rem rgba(245, 245, 245, 0.035);
  padding: 2.4rem;
  text-align: center;

  ${mediaMaxDesktop1024`
    width: 19rem;
  `}
`;

export const CenterLabel = styled.span`
  align-self: end;
  color: ${({ theme }) => theme.submarine};
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1;
  text-transform: uppercase;
  opacity: 0.44;
`;

export const TypeViewport = styled.div`
  width: 100%;
  height: 2.8rem;
  overflow: hidden;
`;

export const TypeTrack = styled.div<{ $activeIndex: number }>`
  display: grid;
  transition: transform 820ms cubic-bezier(0.2, 0.8, 0.2, 1);
  transform: translateY(${({ $activeIndex }) => $activeIndex * -2.8}rem);
`;

export const TypeName = styled.strong`
  height: 2.8rem;
  color: ${({ theme }) => theme.techWhite};
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.8rem;
  text-transform: uppercase;
`;

export const SkillName = styled.span`
  align-self: start;
  min-height: 1.6rem;
  color: ${({ theme }) => theme.fantasia};
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.4;
  opacity: 1;
  transition:
    color 680ms ease,
    opacity 680ms ease,
    text-shadow 680ms ease;
  text-shadow: 0 0 1.2rem
    color-mix(in srgb, ${({ theme }) => theme.fantasia} 44%, transparent);
`;

export const SkillOrbit = styled.div<{ $size: OrbitSize }>`
  position: absolute;
  z-index: 3;
  width: ${({ $size }) => ($size === "large" ? "84rem" : "60rem")};
  aspect-ratio: 1;

  ${mediaMaxDesktop1024`
    width: ${({ $size }) => ($size === "large" ? "64rem" : "46rem")};
  `}
`;

export const SkillPointVisual = styled.span<{ $isActive: boolean }>`
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 1;
  border: 0.1rem solid
    ${({ $isActive, theme }) =>
      $isActive
        ? `color-mix(in srgb, ${theme.fantasia} 78%, ${theme.techWhite10})`
        : "transparent"};
  border-radius: 50%;
  background:
    radial-gradient(
      circle,
      ${({ $isActive, theme }) =>
          $isActive
            ? `color-mix(in srgb, ${theme.fantasia} 18%, transparent)`
            : "transparent"}
        0%,
      transparent 72%
    ),
    ${({ $isActive, theme }) => ($isActive ? theme.codGray : "transparent")};
  box-shadow: ${({ $isActive, theme }) =>
    $isActive
      ? `0 0 2.8rem color-mix(in srgb, ${theme.fantasia} 36%, transparent)`
      : "none"};
  scale: ${({ $isActive }) => ($isActive ? 1.14 : 1)};
  transition:
    background 0.68s ease,
    border-color 0.68s ease,
    box-shadow 0.68s ease,
    scale 0.68s cubic-bezier(0.2, 0.8, 0.2, 1);

  svg {
    width: 3.35rem;
    height: 3.35rem;
    color: ${({ $isActive, theme }) =>
      $isActive ? theme.fantasia : theme.submarine};
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0.48)};
    transition:
      color 0.68s ease,
      opacity 0.68s ease,
      filter 0.68s ease;
  }
`;

export const SkillPoint = styled.button<{ $isActive: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  place-items: center;
  width: 7.4rem;
  aspect-ratio: 1;
  border: 0;
  border-radius: 50%;
  background: transparent;
  padding: 0;

  &:hover ${SkillPointVisual}, &:focus-visible ${SkillPointVisual} {
    border-color: color-mix(
      in srgb,
      ${({ theme }) => theme.fantasia} 78%,
      ${({ theme }) => theme.techWhite10}
    );
    background:
      radial-gradient(
        circle,
        color-mix(in srgb, ${({ theme }) => theme.fantasia} 18%, transparent) 0%,
        transparent 72%
      ),
      ${({ theme }) => theme.codGray};
    box-shadow:
      0 0 2.8rem
        color-mix(in srgb, ${({ theme }) => theme.fantasia} 36%, transparent),
      inset 0 0 1.6rem rgba(245, 245, 245, 0.03);
    scale: ${({ $isActive }) => ($isActive ? 1.14 : 1)};
  }

  &:hover ${SkillPointVisual} svg,
  &:focus-visible ${SkillPointVisual} svg {
    color: ${({ theme }) => theme.fantasia};
    filter: drop-shadow(
      0 0 1rem
        color-mix(in srgb, ${({ theme }) => theme.fantasia} 52%, transparent)
    );
    opacity: 1;
  }

  ${mediaMaxDesktop1024`
    width: 6.2rem;

    ${SkillPointVisual} {
      scale: ${({ $isActive }) => ($isActive ? 1.12 : 1)};
    }

    &:hover,
    &:focus-visible {
      ${SkillPointVisual} {
        scale: 1.12;
      }
    }

    ${SkillPointVisual} svg {
      width: 2.75rem;
      height: 2.75rem;
    }
  `}
`;

export const SkillTooltip = styled.span`
  position: absolute;
  top: calc(100% + 1rem);
  left: 50%;
  width: max-content;
  max-width: 12rem;
  padding: 0.7rem 1rem;
  border: 0.1rem solid ${({ theme }) => theme.techWhite10};
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.codGray};
  color: ${({ theme }) => theme.techWhite};
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -0.5rem);
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;

  ${SkillPoint}:hover &,
  ${SkillPoint}:focus-visible & {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

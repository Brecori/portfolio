import AnimatedContent from "@/components/AnimatedContent";
import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 15rem;
  justify-content: center;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 50% 44%,
      color-mix(in srgb, ${({ theme }) => theme.fantasia} 10%, transparent) 0%,
      transparent 30%
    ),
    linear-gradient(
      color-mix(in srgb, ${({ theme }) => theme.techWhite} 4%, transparent)
        0.1rem,
      transparent 0.1rem
    ),
    linear-gradient(
      90deg,
      color-mix(in srgb, ${({ theme }) => theme.techWhite} 4%, transparent)
        0.1rem,
      transparent 0.1rem
    ),
    ${({ theme }) => theme.extremeBlack};
  background-position: center, center, center;
  background-size:
    100% 100%,
    4.4rem 4.4rem,
    4.4rem 4.4rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  &::before {
    background:
      linear-gradient(
        90deg,
        ${({ theme }) => theme.extremeBlack} 0%,
        transparent 18%,
        transparent 82%,
        ${({ theme }) => theme.extremeBlack} 100%
      ),
      linear-gradient(
        180deg,
        ${({ theme }) => theme.extremeBlack} 0%,
        transparent 24%,
        transparent 76%,
        ${({ theme }) => theme.extremeBlack} 100%
      );
    opacity: 0.78;
  }

  ${mediaMaxDesktop1024`
    padding: 15rem 7.5rem 10rem;
    background-size:
      100% 100%,
      3.8rem 3.8rem,
      3.8rem 3.8rem;

    &::after {
      background-size: 1.4rem 1.4rem;
    }
  `}

  ${mediaMaxMobile`
    flex-direction: column;
    padding: 35rem 2.4rem 10rem;
    min-height: 100dvh;
    justify-content: flex-start;
    background-size:
      100% 100%,
      3.2rem 3.2rem,
      3.2rem 3.2rem;

    &::after {
      background-size: 1.2rem 1.2rem;
    }
  `}
`;

export const LeftGroup = styled(AnimatedContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  position: relative;
  z-index: 1;

  ${mediaMaxDesktop1024`
    gap: 2rem;
  `}

  ${mediaMaxMobile`
    gap: 4rem;
  `}
`;

export const Role = styled.span`
  color: ${({ theme }) => theme.fantasia};
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: 0.8em;
  line-height: 1;
  text-transform: uppercase;

  ${mediaMaxDesktop1024`
    font-size: 1.15rem;
  `}

  ${mediaMaxMobile`
    font-size: 1.3rem;
  `}
`;

export const Title = styled.h1`
  font-size: 8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.techWhite};
  letter-spacing: 0.04em;
  line-height: 1;
  text-align: center;

  ${mediaMaxDesktop1024`
    font-size: 6rem;
  `}

  ${mediaMaxMobile`
    font-size: 5rem;
  `}
`;

export const RotatingPhrase = styled.p`
  min-height: 3.4rem;
  color: ${({ theme }) => theme.submarine};
  font-size: 3.2rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  line-height: 1.05;
  text-align: center;
  text-transform: uppercase;

  ${mediaMaxDesktop1024`
    min-height: 2.5rem;
    font-size: 2.4rem;
  `}

  ${mediaMaxMobile`
    min-height: 2.8rem;
    font-size: 2.6rem;
  `}
`;

export const Description = styled.p`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.submarine};
  max-width: 70ch;
  letter-spacing: 0.02em;
  line-height: 1.5;
  text-align: center;

  ${mediaMaxDesktop1024`
    font-size: 1.2rem;
  `}

  ${mediaMaxMobile`
    font-size: 1.8rem;
  `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.4rem;
  margin-top: 2rem;

  ${mediaMaxDesktop1024`
    margin-top: 1.5rem;
  `}

  ${mediaMaxMobile`
    width: 100%;
    gap: 5rem;
  `}
`;

const iconControlStyles = css`
  position: relative;
  width: 5.6rem;
  height: 5.6rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid transparent;
  border-radius: 0.2rem;
  background:
    radial-gradient(circle, transparent 0%, transparent 72%), transparent;
  box-shadow: none;
  scale: 1;
  transition:
    background 0.68s ease,
    border-color 0.68s ease,
    box-shadow 0.68s ease,
    scale 0.68s cubic-bezier(0.2, 0.8, 0.2, 1);

  svg {
    width: 2.8rem;
    height: 2.8rem;
    color: ${({ theme }) => theme.submarine};
    opacity: 0.48;
    transition:
      color 0.68s ease,
      opacity 0.68s ease,
      filter 0.68s ease;
  }

  &:hover,
  &:focus-visible {
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
    scale: 1.16;
  }

  &:hover svg,
  &:focus-visible svg {
    color: ${({ theme }) => theme.fantasia};
    filter: drop-shadow(
      0 0 1rem
        color-mix(in srgb, ${({ theme }) => theme.fantasia} 52%, transparent)
    );
    opacity: 1;
  }

  ${mediaMaxDesktop1024`
    width: 4.8rem;
    height: 4.8rem;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}

  ${mediaMaxMobile`
    width: 6rem;
    height: 6rem;

    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  `}
`;

export const IconLink = styled.a`
  ${iconControlStyles}
`;

export const IconButton = styled.button`
  ${iconControlStyles}
`;

export const IconTooltip = styled.span`
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

  ${IconLink}:hover &,
  ${IconLink}:focus-visible &,
  ${IconButton}:hover &,
  ${IconButton}:focus-visible & {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  ${mediaMaxMobile`
    font-size: 1.3rem;
  `}
`;

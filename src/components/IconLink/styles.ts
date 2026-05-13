import {
  mediaMaxDesktop1024,
  mediaMaxIpadVertical,
  mediaMaxMobile,
} from "@/lib/media-query";
import styled, { css } from "styled-components";

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
  color: ${({ theme }) => theme.submarine};
  scale: 1;
  transition:
    background 0.68s ease,
    border-color 0.68s ease,
    box-shadow 0.68s ease,
    color 0.68s ease,
    scale 0.68s cubic-bezier(0.2, 0.8, 0.2, 1);

  svg {
    width: 2.8rem;
    height: 2.8rem;
    color: currentColor;
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
    color: ${({ theme }) => theme.fantasia};
    scale: 1.16;
  }

  &:hover svg,
  &:focus-visible svg {
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

  ${mediaMaxIpadVertical`
    width: auto;
    height: auto;
    gap: 1rem;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    scale: 1;
    display: flex;
    align-items: center;

    svg {
      width: 2.4rem;
      height: 2.4rem;
      opacity: 1;
      filter: none;
    }

    &:hover,
    &:focus-visible {
      border-color: transparent;
      background: transparent;
      box-shadow: none;
      scale: 1.16;
    }

    &:hover svg,
    &:focus-visible svg {
      filter: none;
      opacity: 1;
    }
  `}

  ${mediaMaxMobile`
    gap: 1.2rem;
    flex-direction: column;

    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  `}
`;

export const Link = styled.a`
  ${iconControlStyles}
`;

export const Label = styled.span`
  display: none;
  color: inherit;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;

  ${mediaMaxIpadVertical`
    display: inline;
  `}

  ${mediaMaxMobile`
    font-size: 1.6rem;
  `}
`;

export const Tooltip = styled.span`
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

  ${Link}:hover &,
  ${Link}:focus-visible & {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  ${mediaMaxIpadVertical`
    display: none;
  `}
`;

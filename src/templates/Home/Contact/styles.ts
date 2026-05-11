import AnimatedContent from "@/components/AnimatedContent";
import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import styled, { css } from "styled-components";

export const ContactSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12rem 15rem;

  ${mediaMaxDesktop1024`
    min-height: 80vh;
    padding: 10rem 7.5rem;
  `}

  ${mediaMaxMobile`
    min-height: auto;
    padding: 8rem 2.4rem 10rem;
  `}
`;

export const ContactInner = styled(AnimatedContent)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  width: 100%;
  max-width: 112rem;
  text-align: center;

  ${mediaMaxMobile`
    gap: 2rem;
  `}
`;

export const ContactEyebrow = styled.span`
  color: ${({ theme }) => theme.fantasia};
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.8em;
  line-height: 1;
  text-indent: 0.8em;
  text-transform: uppercase;

  ${mediaMaxMobile`
    font-size: 1.1rem;
  `}
`;

export const ContactTitle = styled.h2`
  min-height: 15rem;
  color: ${({ theme }) => theme.techWhite};
  font-size: clamp(5.2rem, 7vw, 10rem);
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 0.92;
  text-transform: uppercase;

  ${mediaMaxDesktop1024`
    min-height: 10rem;
  `}

  ${mediaMaxMobile`
    min-height: 12rem;
    font-size: 4.8rem;
    line-height: 0.98;
  `}
`;

export const ContactList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.4rem;
  margin: 1.6rem 0 0;
  padding: 0;
  list-style: none;

  ${mediaMaxMobile`
    width: 100%;
    gap: 1rem;
  `}
`;

export const ContactItem = styled.li`
  display: flex;
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
`;

export const ContactLink = styled.a`
  ${iconControlStyles}
`;

export const ContactTooltip = styled.span`
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

  ${ContactLink}:hover &,
  ${ContactLink}:focus-visible & {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  ${mediaMaxMobile`
    display: none;
  `}
`;

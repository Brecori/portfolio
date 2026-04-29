import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import styled, { css } from "styled-components";

export const Card = styled.article<{ $featured: boolean }>`
  position: relative;
  overflow: hidden;
  display: grid;
  gap: ${({ $featured }) => ($featured ? "5rem" : "2.4rem")};
  min-height: 22rem;
  border: 0.1rem solid ${({ theme }) => theme.techWhite10};
  border-radius: 0.4rem;
  padding: 2.8rem;
  box-shadow: 0rem 0.2rem 0.8rem rgba(0, 0, 0, 0.2);
  transform: translateY(0);
  transition:
    border-color 0.45s ease,
    box-shadow 0.45s ease,
    transform 0.45s ease;

  & > * {
    position: relative;
    z-index: 1;
  }

  &:hover {
    border-color: color-mix(
      in srgb,
      ${({ theme }) => theme.fantasia} 48%,
      ${({ theme }) => theme.techWhite10}
    );
    box-shadow:
      0rem 1.2rem 3rem rgba(0, 0, 0, 0.24),
      0rem 0rem 2.4rem
        color-mix(in srgb, ${({ theme }) => theme.fantasia} 12%, transparent);
    transform: translateY(-0.4rem);
  }

  ${mediaMaxDesktop1024`
    gap: ${({ $featured }) => ($featured ? "3.6rem" : "2rem")};
    min-height: 16rem;
    padding: 2rem;
  `}

  ${mediaMaxMobile`
    gap: 4rem;
    min-height: 20rem;
    padding: 2.4rem;
  `}
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  svg {
    width: 2.8rem;
    height: 2.8rem;
    color: ${({ theme }) => theme.fantasia};
    stroke-width: 1.6;
    opacity: 0.48;
    transition:
      opacity 0.45s ease,
      filter 0.45s ease,
      transform 0.45s ease;

    ${Card}:hover & {
      opacity: 1;
      filter: drop-shadow(
        0rem 0rem 1rem
          color-mix(in srgb, ${({ theme }) => theme.fantasia} 45%, transparent)
      );
      transform: translateY(-0.2rem);
    }

    ${mediaMaxDesktop1024`
      width: 2.2rem;
      height: 2.2rem;
      opacity: 1;
      filter: none;
      transform: none;
    `}

    ${mediaMaxMobile`
      width: 3rem;
      height: 3rem;
    `}
  }
`;

export const CardNumber = styled.span`
  color: ${({ theme }) => theme.fantasia};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  opacity: 0.34;
  transition:
    opacity 0.45s ease,
    text-shadow 0.45s ease;

  ${Card}:hover & {
    opacity: 1;
    text-shadow: 0rem 0rem 1.4rem
      color-mix(in srgb, ${({ theme }) => theme.fantasia} 45%, transparent);
  }

  ${mediaMaxDesktop1024`
    font-size: 1.1rem;
    opacity: 1;
    text-shadow: none;
  `}

  ${mediaMaxMobile`
    font-size: 1.5rem;
  `}
`;

export const CardContent = styled.div<{ $featured: boolean }>`
  display: grid;
  gap: ${({ $featured }) => ($featured ? "3.2rem" : "2rem")};
  align-self: end;

  ${mediaMaxDesktop1024`
    gap: ${({ $featured }) => ($featured ? "2.4rem" : "1.2rem")};
  `}

  ${mediaMaxMobile`
    gap: 2.4rem;
  `}

  ${({ $featured }) =>
    $featured &&
    css`
      grid-template-columns: minmax(18rem, 0.72fr) 1fr;
      align-items: end;

      ${mediaMaxMobile`
        grid-template-columns: 1fr;
        gap: 3rem;
        align-items: start;
      `}
    `}
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.techWhite};
  font-size: 4.2rem;
  font-weight: 600;
  line-height: 1;
  opacity: 0.62;
  transition:
    opacity 0.45s ease,
    text-shadow 0.45s ease;

  ${Card}:hover & {
    opacity: 1;
    text-shadow: 0rem 0rem 1.6rem rgba(245, 245, 245, 0.1);
  }

  ${mediaMaxDesktop1024`
    font-size: 2.8rem;
    opacity: 1;
    text-shadow: none;
  `}

  ${mediaMaxMobile`
    font-size: 4rem;
  `}
`;

export const StackList = styled.ul<{ $featured: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ $featured }) =>
    $featured ? "flex-end" : "flex-start"};
  gap: 3rem;

  ${mediaMaxDesktop1024`
    gap: 1.6rem;
  `}

  ${mediaMaxMobile`
    gap: 1.6rem 3.2rem;
  `}

  ${mediaMaxMobile`
    justify-content: flex-start;
  `}
`;

export const StackItem = styled.li`
  color: ${({ theme }) => theme.submarine};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1;

  transform: translateY(1.2rem);
  opacity: 0.36;
  transition:
    transform 520ms cubic-bezier(0.2, 0.8, 0.2, 1),
    opacity 520ms cubic-bezier(0.2, 0.8, 0.2, 1),
    color 520ms cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: transform, opacity;

  ${Card}:hover & {
    transform: translateY(0);
    opacity: 1;
    color: ${({ theme }) => theme.techWhite};
  }

  ${Card}:hover &:nth-last-child(1) {
    transition-delay: 0s;
  }
  ${Card}:hover &:nth-last-child(2) {
    transition-delay: 0.08s;
  }
  ${Card}:hover &:nth-last-child(3) {
    transition-delay: 0.16s;
  }
  ${Card}:hover &:nth-last-child(4) {
    transition-delay: 0.24s;
  }
  ${Card}:hover &:nth-last-child(5) {
    transition-delay: 0.32s;
  }
  ${Card}:hover &:nth-last-child(6) {
    transition-delay: 0.4s;
  }

  ${mediaMaxDesktop1024`
    transform: none;
    opacity: 1;
    transition: none;
  `}

  ${mediaMaxDesktop1024`
    font-size: 1.1rem;
  `}

  ${mediaMaxMobile`
    font-size: 1.6rem;
  `}
`;

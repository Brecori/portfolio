import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import styled, { keyframes } from "styled-components";

const dotFloat = keyframes`
  0%,
  66%,
  100% {
    opacity: 0.42;
    transform: translateY(0);
  }

  16% {
    opacity: 1;
    transform: translateY(-0.8rem);
  }

  32% {
    opacity: 0.42;
    transform: translateY(0);
  }
`;

export const RestQuoteContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 74rem;
  overflow: hidden;
  padding: 0 15rem;
  min-height: 120vh;

  ${mediaMaxDesktop1024`
    min-height: 52rem;
    padding: 5rem 7.5rem 10rem;
  `}

  ${mediaMaxMobile`
    min-height: 48rem;
    padding: 8rem 2.4rem;
  `}
`;

export const QuoteTrack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  width: 100%;
  text-align: center;
  will-change: transform;

  ${mediaMaxDesktop1024`
    gap: 2.4rem;
  `}

  ${mediaMaxMobile`
    gap: 2rem;
  `}
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  height: 4.8rem;

  span {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primary};
    opacity: 0.42;
    animation: ${dotFloat} 2.4s ease-in-out infinite;
  }

  span:nth-child(2) {
    animation-delay: 0.18s;
  }

  span:nth-child(3) {
    animation-delay: 0.36s;
  }

  ${mediaMaxDesktop1024`
    height: 3.6rem;
    gap: 1rem;

    span {
      width: 0.7rem;
      height: 0.7rem;
    }
  `}

  ${mediaMaxMobile`
    height: 4rem;
    gap: 1.1rem;

    span {
      width: 0.8rem;
      height: 0.8rem;
    }
  `}
`;

export const Quote = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 8rem;
  font-weight: 500;
  line-height: 0.95;
  letter-spacing: 0;

  ${mediaMaxDesktop1024`
    font-size: 5.6rem;
  `}

  ${mediaMaxMobile`
    max-width: 10ch;
    font-size: 4.8rem;
  `}
`;

export const Highlight = styled.span`
  --highlight-progress: 0%;

  color: transparent;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.primary} 0%,
    ${({ theme }) => theme.primary} var(--highlight-progress),
    ${({ theme }) => theme.textSecondary} var(--highlight-progress),
    ${({ theme }) => theme.textSecondary} 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
`;

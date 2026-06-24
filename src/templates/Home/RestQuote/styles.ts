import {
  mediaMaxDesktop1024,
  mediaMaxIpadVertical,
  mediaMaxMobile,
} from "@/lib/media-query";
import { theme } from "@/styles/theme";
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
  overflow: hidden;
  padding: 0 15rem;
  min-height: 150vh;

  ${mediaMaxDesktop1024`
    min-height: 130vh;
    padding: 0 7.5rem 0;
  `}

  ${mediaMaxIpadVertical`
    min-height: 100vh;
    min-height: 100dvh;
    padding: 0 7.5rem;
  `}

  ${mediaMaxMobile`
    padding: 0 2.4rem;
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
    background-color: ${theme.fantasia};
    opacity: 0.42;
    animation: ${dotFloat} 2.1s ease-in-out infinite;
  }

  span:nth-child(2) {
    animation-delay: 0.12s;
  }

  span:nth-child(3) {
    animation-delay: 0.24s;
  }

  ${mediaMaxDesktop1024`
    height: 3.6rem;
    gap: 1rem;

    span {
      width: 0.7rem;
      height: 0.7rem;
    }
  `}

  ${mediaMaxIpadVertical`
    height: 4.2rem;
    gap: 1.2rem;

    span {
      width: 1.4rem;
      height: 1.4rem;
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
  color: ${theme.techWhite};
  font-size: 8rem;
  font-weight: 500;
  line-height: 0.95;
  letter-spacing: 0;

  ${mediaMaxDesktop1024`
    font-size: 5.6rem;
  `}

  ${mediaMaxMobile`
    font-size: 4.8rem;
  `}
`;

export const Highlight = styled.span`
  --highlight-progress: 0%;

  color: transparent;
  background: linear-gradient(
    90deg,
    ${theme.fantasia} 0%,
    ${theme.fantasia} var(--highlight-progress),
    ${theme.submarine} var(--highlight-progress),
    ${theme.submarine} 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
`;

import AnimatedContent from "@/components/AnimatedContent";
import {
  mediaMaxDesktop1024,
  mediaMaxIpadVertical,
  mediaMaxMobile,
} from "@/lib/media-query";
import styled from "styled-components";

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

export const MainGroup = styled(AnimatedContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  position: relative;
  z-index: 1;

  ${mediaMaxDesktop1024`
    gap: 2rem;
  `}

  ${mediaMaxIpadVertical`
    gap: 3rem;
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

  ${mediaMaxIpadVertical`
    font-size: 1.4rem;
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

  ${mediaMaxIpadVertical`
    font-size: 5.8rem;
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

  ${mediaMaxIpadVertical`
    min-height: 3rem;
    font-size: 2.8rem;
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

  ${mediaMaxIpadVertical`
    font-size: 2rem;
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

  ${mediaMaxIpadVertical`
    width: 100%;
    margin-top: 4rem;
    gap: 4rem;
  `}

  ${mediaMaxMobile`
    width: 100%;
    margin-top: 5rem;
    gap: 5rem;
  `}
`;

export const ScrollDownButtonContainer = styled(AnimatedContent)`
  position: absolute;
  left: 50%;
  bottom: 10rem;
  transform: translateX(-50%);

  ${mediaMaxDesktop1024`
    bottom: 5rem;
  `}

  ${mediaMaxIpadVertical`
    bottom: 15rem;
  `}

  ${mediaMaxMobile`
    bottom: 20rem;
  `}
`;

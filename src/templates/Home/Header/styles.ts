import AnimatedContent from "@/components/AnimatedContent";
import {
  mediaMaxDesktop1024,
  mediaMaxIpadVertical,
  mediaMaxMobile,
} from "@/lib/media-query";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 15rem;
  overflow: hidden;

  ${mediaMaxDesktop1024`
    padding: 25rem 7.5rem 10rem;
    justify-content: space-between;
  `}

  ${mediaMaxIpadVertical`
    padding-top: 40rem;
  `}

  ${mediaMaxMobile`
    flex-direction: column;
    padding: 35rem 2.4rem 10rem;
    min-height: 100svh;
  `}
`;

export const MainGroup = styled(AnimatedContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
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
  color: ${theme.fantasia};
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

export const TitleRevealGroup = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  position: relative;
  z-index: 2;
  font-size: 14rem;
  font-weight: 400;
  color: ${theme.techWhite};
  letter-spacing: 0.04em;
  line-height: 1;
  text-align: center;
  font-family: var(--font-neue);
  transition:
    color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    color: ${theme.submarine};
    transform: translateY(0.6rem);

    ${mediaMaxIpadVertical`
      transform: none;
      color: ${theme.techWhite};
    `}
  }

  ${mediaMaxDesktop1024`
    font-size: 6rem;
  `}

  ${mediaMaxIpadVertical`
    font-size: 8rem;
  `}

  ${mediaMaxMobile`
    font-size: 7rem;
  `}
`;

export const TitleImageReveal = styled.div`
  position: absolute;
  top: -20rem;
  left: calc(100% + 10rem);
  z-index: 1;
  width: 35rem;
  height: 35rem;
  overflow: hidden;
  pointer-events: none;
  clip-path: polygon(0 0, 0 0, 0 0);
  transform: translate(-1.2rem, -1.2rem);
  border-radius: 0.2rem;
  transition:
    clip-path 1.25s cubic-bezier(0.22, 1, 0.36, 1),
    transform 1.25s cubic-bezier(0.22, 1, 0.36, 1);

  img {
    object-fit: cover;
    filter: grayscale(1);
  }

  ${Title}:hover + &,
  ${Title}:focus-visible + & {
    clip-path: polygon(0 0, 200% 0, 0 200%);
    transform: translate(0, 0);
  }

  ${mediaMaxDesktop1024`
    width: 22rem;
    height: 22rem;
    top: -15rem;
  `}

  ${mediaMaxIpadVertical`
    display: none;
  `}
`;

export const RotatingPhrase = styled.p`
  min-height: 3.4rem;
  color: ${theme.submarine};
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
  color: ${theme.submarine};
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
  margin-bottom: 10rem;

  ${mediaMaxDesktop1024`
    margin-bottom: 0rem;
  `}
`;

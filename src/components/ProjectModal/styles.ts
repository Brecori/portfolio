import {
  mediaMaxDesktop1024,
  mediaMaxIpadVertical,
  mediaMaxMobile,
} from "@/lib/media-query";
import { theme } from "@/styles/theme";
import styled, { css, keyframes } from "styled-components";

const riseIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 2.4rem, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const modalTagStyles = css`
  min-height: 4rem;
  padding: 0.9rem 1.4rem;
  border: 0.1rem solid ${theme.techWhite10};
  color: ${theme.techWhite};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;

  ${mediaMaxDesktop1024`
    min-height: 3.6rem;
    padding: 0.8rem 1.2rem;
    font-size: 0.95rem;
  `}
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 120;
  display: grid;
  place-items: center;
  padding: 2.4rem;
  background: transparent;
  backdrop-filter: blur(3.2rem);
  -webkit-backdrop-filter: blur(3.2rem);

  ${mediaMaxMobile`
    padding: 1.2rem;
  `}
`;

export const ModalCard = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  width: 150rem;
  height: 48rem;
  border-radius: 0.2rem;
  overflow: hidden;
  background: ${theme.extremeBlack};
  border: 0.1rem solid ${theme.techWhite10};

  ${mediaMaxDesktop1024`
    grid-template-columns: 1fr;
    width: 55rem;
    height: 70rem;
  `}

  ${mediaMaxIpadVertical`
    position: relative;
    width: 80rem;
    height: 100rem;
  `}

  ${mediaMaxMobile`
    width: calc(100% - 4.8rem);
    height: 70vh;
  `}
`;

export const ModalMedia = styled.div`
  position: relative;
  min-height: 48rem;
  background: transparent;
  animation: ${riseIn} 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;

  ${mediaMaxDesktop1024`
    min-height: 30rem;
  `}

  ${mediaMaxIpadVertical`
    min-height: 28rem;
  `}

  ${mediaMaxMobile`
    min-height: 26rem;
  `}
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.84) brightness(0.76);
`;

export const ModalBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3.2rem;
  overflow-y: auto;
  background: transparent;
  justify-content: center;

  ${mediaMaxDesktop1024`
    gap: 2.4rem;
    position: static;
    justify-content: flex-start;
  `}

  ${mediaMaxMobile`
    gap: 2.4rem;
    padding: 2.4rem;
  `}
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border: 0.1rem solid ${theme.techWhite10};
  background: ${theme.extremeBlack};
  color: ${theme.techWhite};
  transition:
    border-color 0.25s ease,
    transform 0.25s ease;
  animation: ${riseIn} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;

  &:hover,
  &:focus-visible {
    border-color: ${theme.fantasia};
    transform: rotate(90deg);
  }

  ${mediaMaxDesktop1024`
    top: 1.6rem;
    right: 1.6rem;
    width: 3.6rem;
    height: 3.6rem;
  `}

  ${mediaMaxIpadVertical`
    top: 1.6rem;
    right: 1.6rem;
  `}
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  max-width: 72rem;
  padding-right: 5rem;
  animation: ${riseIn} 0.52s cubic-bezier(0.22, 1, 0.36, 1) 0.08s both;

  ${mediaMaxDesktop1024`
    gap: 1.2rem;
    padding-right: 0;
  `}
`;

export const ModalSummary = styled.p`
  color: ${theme.fantasia};
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const ModalTitle = styled.h3`
  color: ${theme.techWhite};
  font-size: clamp(3.6rem, 4vw, 6rem);
  font-weight: 400;
  letter-spacing: -0.05em;
  line-height: 0.95;

  ${mediaMaxDesktop1024`
    font-size: clamp(3rem, 3.4vw, 4.8rem);
  `}
`;

export const ModalDescription = styled.p`
  color: ${theme.submarine};
  font-size: 1.6rem;
  line-height: 1.7;
  margin-top: 0.8rem;

  ${mediaMaxDesktop1024`
    font-size: 1.45rem;
    line-height: 1.6;
  `}
`;

export const ModalInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.4rem;
  max-width: 72rem;
  animation: ${riseIn} 0.52s cubic-bezier(0.22, 1, 0.36, 1) 0.16s both;

  ${mediaMaxDesktop1024`
    gap: 1.8rem;
  `}

  ${mediaMaxMobile`
    grid-template-columns: 1fr;
    gap: 1.8rem;
  `}
`;

export const ModalInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ModalInfoLabel = styled.span`
  color: ${theme.techWhite};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const ModalStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ModalStackItem = styled.span`
  display: inline-flex;
  align-items: center;
  ${modalTagStyles}
`;

export const ModalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  ${modalTagStyles}
  background: ${theme.extremeBlack};
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;

  &:hover,
  &:focus-visible {
    border-color: ${theme.fantasia};
    background: color-mix(
      in srgb,
      ${theme.fantasia} 14%,
      ${theme.extremeBlack}
    );
    color: ${theme.techWhite};
    transform: scale(1.05);
  }

  &:focus-visible {
    outline: 0.2rem solid ${theme.fantasia};
    outline-offset: 0.2rem;
  }
`;

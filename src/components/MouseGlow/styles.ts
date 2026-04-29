import styled from "styled-components";

export const Glow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  pointer-events: none;
  background-color: ${({ theme }) => theme.fantasia};
  opacity: 0.32;
  filter: blur(5rem);
  transform: translate3d(-50%, -50%, 0);
  transition: opacity 0.3s ease-in-out;
  will-change: transform;
  z-index: 20;

  @media (pointer: coarse) {
    display: none;
  }
`;

const cursorLayerStyles = `
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
  transform: translate3d(-50%, -50%, 0);
  transition:
    opacity 0.3s ease-in-out,
    width 0.18s ease-out,
    height 0.18s ease-out;
  will-change: transform;
  z-index: 40;

  @media (pointer: coarse) {
    display: none;
  }
`;

export const CursorRing = styled.div`
  ${cursorLayerStyles}
  width: 3.2rem;
  height: 3.2rem;
  border: 0.1rem solid ${({ theme }) => theme.fantasia};
  background-color: ${({ theme }) => `${theme.fantasia}12`};
  backdrop-filter: blur(0.1rem);
`;

export const CursorDot = styled.div`
  ${cursorLayerStyles}
  width: var(--cursor-dot-size, 0.4rem);
  height: var(--cursor-dot-size, 0.4rem);
  background-color: ${({ theme }) => theme.fantasia};
  z-index: 41;
`;

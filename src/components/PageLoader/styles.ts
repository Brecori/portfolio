import { theme } from "@/styles/theme";
import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import styled, { css } from "styled-components";

export const Overlay = styled.div<{ $fixed: boolean }>`
  ${({ $fixed }) =>
    $fixed
      ? css`
          position: fixed;
          inset: 0;
          z-index: 9999;
        `
      : css`
          position: absolute;
          inset: 0;
        `}

  display: grid;
  place-items: center;
  overflow: hidden;
  background: ${theme.darkBlack};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  ${mediaMaxMobile`
    gap: 2.4rem;
  `}
`;

export const Percentage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 56rem;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  font-style: italic;
  line-height: 1;
  white-space: nowrap;
  color: ${theme.fantasia}90;
  user-select: none;
  font-family: var(--font-neue);

  ${mediaMaxDesktop1024`
    font-size: 32rem;
  `}

  ${mediaMaxMobile`
    font-size: 20rem;
  `}
`;

export const LogoWrapper = styled.div`
  position: relative;
  display: grid;
  place-items: center;
`;

const logoStyles = css`
  grid-area: 1 / 1;
  color: ${theme.techWhite};
  font-size: clamp(2.8rem, 4vw, 6rem);
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;

  span {
    color: ${theme.fantasia};
  }

  ${mediaMaxMobile`
    font-size: clamp(2rem, 6vw, 3.4rem);
  `}
`;

export const LogoBase = styled.div`
  ${logoStyles}
  color: color-mix(in srgb, ${theme.techWhite} 18%, transparent);

  span {
    color: color-mix(in srgb, ${theme.fantasia} 24%, transparent);
  }
`;

export const LogoFill = styled.div`
  ${logoStyles}
  transition: clip-path 0.18s ease-out;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

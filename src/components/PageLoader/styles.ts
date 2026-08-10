import { theme } from "@/styles/theme";
import { mediaMaxMobile } from "@/lib/media-query";
import styled, { css } from "styled-components";

export const Overlay = styled.div<{ $fixed: boolean; $visible: boolean }>`
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
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transition: opacity 0.45s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Logo = styled.div`
  color: ${theme.techWhite};
  font-size: clamp(2.8rem, 4vw, 6rem);
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  user-select: none;

  span {
    color: ${theme.fantasia};
  }

  ${mediaMaxMobile`
    font-size: clamp(2rem, 6vw, 3.4rem);
  `}
`;

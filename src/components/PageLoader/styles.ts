import { theme } from "@/styles/theme";
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

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.extremeBlack};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: min(72rem, calc(100vw - 4.8rem));
`;

export const ProgressHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Status = styled.span`
  color: ${theme.submarine};
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.5em;
  line-height: 1;
  text-indent: 0.5em;
  text-transform: uppercase;
`;

export const Percentage = styled.span`
  color: ${theme.fantasia};
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.04em;
`;

export const ProgressTrack = styled.div`
  width: 100%;
  height: 0.9rem;
  border-radius: 0.1rem;
  overflow: hidden;
  background: color-mix(in srgb, ${theme.submarine} 14%, transparent);
  box-shadow: inset 0 0 0 0.1rem
    color-mix(in srgb, ${theme.techWhite10} 80%, transparent);
`;

export const ProgressFill = styled.div<{ $progress: number }>`
  width: ${({ $progress }) => `${$progress}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(
    90deg,
    #b86cff 0%,
    ${theme.fantasia} 55%,
    #8f4dff 100%
  );
  box-shadow: 0 0 2rem color-mix(in srgb, ${theme.fantasia} 42%, transparent);
  transition: width 0.18s ease-out;
`;

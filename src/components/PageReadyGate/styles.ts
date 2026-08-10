import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  min-height: 100%;
`;

export const Content = styled.div<{ $ready: boolean }>`
  opacity: ${({ $ready }) => ($ready ? 1 : 0)};
  transition: opacity 0.25s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

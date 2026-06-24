import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  min-height: 100%;
`;

export const Content = styled.div<{ $ready: boolean }>`
  opacity: ${({ $ready }) => ($ready ? 1 : 0)};
  visibility: ${({ $ready }) => ($ready ? "visible" : "hidden")};
  transition: opacity 0.15s ease;
`;

import styled from "styled-components";

export const Container = styled.div<{ $hasAnimated: boolean }>`
  position: relative;

  > * {
    transform: ${({ $hasAnimated }) =>
      $hasAnimated ? "none" : "translateY(3rem)"};
    opacity: ${({ $hasAnimated }) => ($hasAnimated ? 1 : 0)};

    @media (max-width: 1024px) {
      transform: ${({ $hasAnimated }) =>
        $hasAnimated ? "none" : "translateY(1.3rem)"};
    }

    @media (max-width: 599px) {
      transform: ${({ $hasAnimated }) =>
        $hasAnimated ? "none" : "translateY(1rem)"};
    }
  }
`;

export const Item = styled.div``;

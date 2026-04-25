import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import styled from "styled-components";

export const Container = styled.div<{ $hasAnimated: boolean }>`
  position: relative;

  > * {
    transform: ${({ $hasAnimated }) =>
      $hasAnimated ? "none" : "translateY(3rem)"};
    opacity: ${({ $hasAnimated }) => ($hasAnimated ? 1 : 0)};

    ${mediaMaxDesktop1024`
      transform: ${({ $hasAnimated }) =>
        $hasAnimated ? "none" : "translateY(1.3rem)"};
    `}

    ${mediaMaxMobile`
      transform: ${({ $hasAnimated }) =>
        $hasAnimated ? "none" : "translateY(1rem)"};
    `}
  }
`;

export const Item = styled.div``;

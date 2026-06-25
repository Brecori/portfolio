import { mediaMaxDesktop1024 } from "@/lib/media-query";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Title = styled.h2<{ $isVisible: boolean }>`
  font-size: 5rem;
  font-weight: 600;
  position: relative;
  width: fit-content;
  color: ${theme.techWhite};
  font-family: var(--font-neue);
  letter-spacing: 0.15em;

  &::after {
    content: "";
    position: absolute;
    width: ${({ $isVisible }) => ($isVisible ? "35%" : "0%")};
    height: 0.6rem;
    background-color: ${theme.fantasia};
    bottom: -1rem;
    left: 0;
    transition: width 0.7s 0.3s ease-out;
  }

  ${mediaMaxDesktop1024`
    font-size: 4rem;
  `}
`;

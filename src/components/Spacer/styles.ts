import { mediaMaxMobile } from "@/lib/media-query";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Spacer = styled.div`
  width: 100%;
  height: 0.1rem;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${theme.techWhite10} 50%,
    transparent 100%
  );

  ${mediaMaxMobile`
    height: 0.2rem;
  `}
`;

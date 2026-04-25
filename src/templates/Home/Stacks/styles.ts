import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import styled from "styled-components";

export const StacksContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  padding: 5rem 15rem 15rem;

  ${mediaMaxDesktop1024`
    gap: 7.5rem;
    padding: 5rem 7.5rem 10rem;
  `}

  ${mediaMaxMobile`
    gap: 5rem;
    padding: 8rem 2.4rem;
  `}
`;

export const StacksGrid = styled.div`
  display: grid;
  gap: 2rem;
`;

export const SecondaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;

  ${mediaMaxMobile`
    grid-template-columns: 1fr;
  `};
`;

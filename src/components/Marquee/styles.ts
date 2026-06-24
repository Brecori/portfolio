import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  padding-block: 10rem;
`;

export const Track = styled.div`
  display: flex;
  width: max-content;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    transform: none;
  }
`;

export const PhraseGroup = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 2.4rem;
  padding: 2rem 2.4rem;

  ${mediaMaxMobile`
    gap: 1.6rem;
    padding: 1.6rem;
  `}
`;

export const Phrase = styled.span`
  flex: 0 0 auto;
  color: ${({ theme }) => theme.techWhite50};
  font-size: 10rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-style: italic;
  pointer-events: none;

  ${mediaMaxDesktop1024`
    font-size: 9rem;
  `}

  ${mediaMaxMobile`
    font-size: 4rem;
  `}
`;

export const Separator = styled.span`
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: transparent;
  border: 0.2rem solid ${({ theme }) => theme.techWhite50};

  ${mediaMaxMobile`
    width: 1.2rem;
    height: 1.2rem;
    border-width: 0.12rem;
  `}
`;

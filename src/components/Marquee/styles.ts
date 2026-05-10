import { mediaMaxMobile } from "@/lib/media-query";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  border-top: 0.1rem solid ${({ theme }) => theme.techWhite10};
  border-bottom: 0.1rem solid ${({ theme }) => theme.techWhite10};
  background: linear-gradient(
    90deg,
    color-mix(in srgb, ${({ theme }) => theme.extremeBlack} 90%, transparent) 0%,
    ${({ theme }) => theme.extremeBlack} 10%,
    ${({ theme }) => theme.extremeBlack} 90%,
    color-mix(in srgb, ${({ theme }) => theme.extremeBlack} 90%, transparent)
      100%
  );
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
  color: ${({ theme }) => theme.techWhite};
  font-size: 5.8rem;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  ${mediaMaxMobile`
    font-size: 1.4rem;
  `}
`;

export const Separator = styled.span`
  flex: 0 0 auto;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 999rem;
  background-color: ${({ theme }) => theme.fantasia};
  opacity: 0.72;
`;

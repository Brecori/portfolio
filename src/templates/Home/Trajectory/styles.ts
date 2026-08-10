import {
  mediaMaxDesktop1024,
  mediaMaxIpadVertical,
  mediaMaxMobile,
} from "@/lib/media-query";
import AnimatedContent from "@/components/AnimatedContent";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const TrajectoryContainer = styled.section`
  display: flex;
  gap: 20rem;
  padding: 10rem 15rem;

  ${mediaMaxDesktop1024`
    gap: 8rem;
    padding: 10rem 7.5rem;
  `}

  ${mediaMaxIpadVertical`
    gap: 6rem;
  `}

  ${mediaMaxMobile`
    display: flex;
    flex-direction: column;
    gap: 8rem;
    padding: 8rem 2.4rem;
  `}
`;

export const SectionHeader = styled.div``;

export const Timeline = styled.div`
  position: relative;
  width: 100%;
  padding-right: 2rem;

  ${mediaMaxMobile`
    width: 100%;
    padding-right: 0.8rem;
  `}
`;

export const TimelineContent = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(14rem + 1.6rem);
    width: 0.1rem;
    background-color: ${theme.techWhite10};
  }

  ${mediaMaxDesktop1024`
    &::before {
      left: calc(11rem + 1.4rem);
    }
  `}

  ${mediaMaxMobile`
    &::before {
      left: 0;
    }
  `}
`;

export const TimelineMarker = styled.span`
  position: absolute;
  top: 0;
  left: calc(14rem + 1.6rem);
  z-index: 2;
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${theme.fantasia};
  box-shadow: 0 0 2.4rem 0.8rem ${theme.fantasia};
  margin-bottom: -1rem;
  will-change: transform;
  margin-left: -0.5rem;

  ${mediaMaxDesktop1024`
    left: calc(11rem + 1.4rem);
  `}

  ${mediaMaxMobile`
    left: 0;
  `}
`;

export const YearGroup = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(9rem, 14rem) 3.2rem minmax(0, 1fr);
  min-height: 40rem;

  &:last-child {
    min-height: 28rem;
  }

  ${mediaMaxDesktop1024`
    grid-template-columns: minmax(7rem, 11rem) 2.8rem minmax(0, 1fr);
    min-height: 42rem;
  `}

  ${mediaMaxMobile`
    grid-template-columns: 1fr;
    min-height: auto;
  `}
`;

export const YearAnimation = styled(AnimatedContent)`
  align-self: start;
  min-width: 0;
`;

export const YearLabel = styled.div<{ $active: boolean }>`
  align-self: start;
  padding-top: 1.4rem;
  min-width: 0;

  span {
    display: block;
    color: ${({ $active }) => ($active ? theme.fantasia : theme.submarine)};
    font-size: 2.6rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    line-height: 1;
    opacity: ${({ $active }) => ($active ? 1 : 0.15)};
    transition:
      color 0.3s ease,
      opacity 0.3s ease;
  }

  ${mediaMaxDesktop1024`
    span {
      font-size: 2.2rem;
    }
  `}

  ${mediaMaxMobile`
    position: static;
    padding: 0 0 1.6rem 2.4rem;

    span {
      opacity: 1;
      font-size: 1.8rem;
    }
  `}
`;

export const Rail = styled.div`
  position: relative;

  ${mediaMaxMobile`
    position: absolute;
    left: 0rem;
    width: 0.1rem;
    height: 100%;
  `}
`;

export const YearContent = styled.div<{ $active: boolean }>`
  display: grid;
  gap: 2.4rem;
  padding: 0 0 10rem 3.2rem;
  opacity: ${({ $active }) => ($active ? 1 : 0.05)};
  transition: opacity 0.3s ease;

  ${mediaMaxDesktop1024`
    padding-left: 2.4rem;
  `}

  ${mediaMaxMobile`
    padding: 0 0 7rem 2.4rem;
    opacity: 1;
  `}
`;

export const TrajectoryCard = styled.article`
  max-width: 78rem;
  padding: 0.6rem 0 0;
`;

export const CardMeta = styled.p`
  color: ${theme.fantasia};
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const CardTitle = styled.h3`
  margin-top: 1.2rem;
  color: ${theme.techWhite};
  font-size: 3.6rem;
  font-weight: 600;
  line-height: 1.05;

  ${mediaMaxMobile`
    font-size: 2.8rem;
  `}
`;

export const CardCompany = styled.p`
  margin-top: 0.8rem;
  color: ${theme.submarine};
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
`;

export const CardDescription = styled.p`
  max-width: 64rem;
  margin-top: 2.4rem;
  color: ${theme.submarine};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.55;
`;

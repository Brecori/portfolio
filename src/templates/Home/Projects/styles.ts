import AnimatedContent from "@/components/AnimatedContent";
import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import styled from "styled-components";

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 10rem 15rem;

  ${mediaMaxDesktop1024`
    padding: 10rem 7.5rem;
  `}

  ${mediaMaxMobile`
    gap: 3.2rem;
    padding: 8rem 2.4rem;
  `}
`;

export const ProjectsIntro = styled.div`
  width: fit-content;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 3rem;
  gap: 1.8rem;
  width: 100%;

  ${mediaMaxMobile`
    grid-template-columns: 1fr;
    gap: 1.6rem;
  `}
`;

export const ProjectAnimation = styled(AnimatedContent)`
  width: 100%;

  > div,
  > div > div {
    height: 100%;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.01);
  transition:
    transform 0.5s ease,
    filter 0.5s ease;
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      color-mix(in srgb, ${({ theme }) => theme.extremeBlack} 4%, transparent)
        0%,
      color-mix(in srgb, ${({ theme }) => theme.extremeBlack} 52%, transparent)
        56%,
      color-mix(in srgb, ${({ theme }) => theme.extremeBlack} 82%, transparent)
        100%
    ),
    color-mix(in srgb, ${({ theme }) => theme.extremeBlack} 38%, transparent);
  opacity: 0;
  transition: opacity 0.45s ease;

  ${mediaMaxMobile`
    opacity: 1;
  `}
`;

export const ProjectContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.2rem;
  padding: 1.8rem;
  opacity: 0;
  transform: translateY(1.6rem);
  transition:
    opacity 0.45s ease,
    transform 0.45s ease;

  ${mediaMaxDesktop1024`
    padding: 1.6rem;
  `}

  ${mediaMaxMobile`
    opacity: 1;
    transform: translateY(0);
  `}
`;

export const ProjectCard = styled.a`
  position: relative;
  display: block;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: ${({ theme }) => theme.codGray};
  border-radius: 0.2rem;

  &:focus-visible {
    outline: 0.2rem solid ${({ theme }) => theme.fantasia};
    outline-offset: 0.2rem;
  }

  &:hover ${ProjectImage}, &:focus-visible ${ProjectImage} {
    filter: brightness(0.42);
    transform: scale(1.05);
  }

  &:hover ${ProjectOverlay}, &:focus-visible ${ProjectOverlay} {
    opacity: 1;
  }

  &:hover ${ProjectContent}, &:focus-visible ${ProjectContent} {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ProjectMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  color: ${({ theme }) => theme.submarine};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  line-height: 1.2;
  text-transform: uppercase;

  span:last-child {
    display: -webkit-box;
    overflow: hidden;
    text-align: right;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

export const ProjectTitleWrapper = styled.div`
  display: grid;
  gap: 0.8rem;
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.techWhite};
  font-size: clamp(2rem, 1.9vw, 3rem);
  font-weight: 400;
  line-height: 1;
`;

export const ProjectFooter = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1.2rem;

  ${mediaMaxMobile`
    flex-direction: column;
    align-items: start;
  `}
`;

export const ProjectStack = styled.span`
  color: ${({ theme }) => theme.fantasia};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.35;
  text-transform: uppercase;
`;

export const ProjectAction = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  color: ${({ theme }) => theme.techWhite};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;

  svg {
    flex: 0 0 auto;
  }
`;

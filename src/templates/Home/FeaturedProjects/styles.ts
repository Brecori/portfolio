import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import AnimatedContent from "@/components/AnimatedContent";
import styled from "styled-components";

export const FeaturedProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  padding: 15rem;

  ${mediaMaxDesktop1024`
    gap: 7.5rem;
    padding: 5rem 7.5rem 10rem;
  `}

  ${mediaMaxMobile`
    gap: 5rem;
    padding: 8rem 2.4rem;
  `}
`;

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.1rem solid ${({ theme }) => theme.techWhite10};
`;

export const ProjectAnimation = styled(AnimatedContent)`
  min-height: 13.6rem;

  > div {
    height: 100%;
  }

  ${mediaMaxDesktop1024`
    min-height: 12.8rem;
  `}

  ${mediaMaxMobile`
    min-height: 32rem;
  `}
`;

export const ProjectCard = styled.a`
  position: relative;
  display: grid;
  align-items: stretch;
  min-height: 100%;
  overflow: hidden;
  border-bottom: 0.1rem solid ${({ theme }) => theme.techWhite10};
  background-color: transparent;
  transition:
    background-color 0.45s ease,
    min-height 0.45s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background:
      linear-gradient(
        90deg,
        ${({ theme }) => theme.codGray} 0%,
        color-mix(
            in srgb,
            ${({ theme }) => theme.codGray} 82%,
            transparent
          )
          38%,
        color-mix(
            in srgb,
            ${({ theme }) => theme.codGray} 36%,
            transparent
          )
          100%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, ${({ theme }) => theme.extremeBlack} 14%, transparent)
          0%,
        color-mix(in srgb, ${({ theme }) => theme.extremeBlack} 74%, transparent)
          100%
      );
    opacity: 0;
    transition: opacity 0.45s ease;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    border-left: 0.2rem solid ${({ theme }) => theme.fantasia};
    opacity: 0;
    transform: scaleY(0);
    transform-origin: center top;
    transition:
      opacity 0.45s ease,
      transform 0.45s ease;
  }

  &:hover,
  &:focus-visible {
    min-height: 31rem;
    background-color: ${({ theme }) => theme.codGray};
  }

  &:hover::before,
  &:focus-visible::before,
  &:hover::after,
  &:focus-visible::after {
    opacity: 1;
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleY(1);
  }

  &:focus-visible {
    outline: 0.1rem solid ${({ theme }) => theme.fantasia};
    outline-offset: -0.1rem;
  }

  ${mediaMaxMobile`
    min-height: 32rem;
    background-color: ${({ theme }) => theme.codGray};

    &::before,
    &::after {
      opacity: 1;
    }

    &::after {
      transform: scaleY(1);
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::before,
    &::after {
      transition: none;
    }
  }
`;

export const ProjectImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1.06);
  transition:
    opacity 0.45s ease,
    transform 0.65s ease;

  ${ProjectCard}:hover &,
  ${ProjectCard}:focus-visible & {
    opacity: 0.58;
    transform: scale(1);
  }

  ${mediaMaxMobile`
    opacity: 0.48;
    transform: scale(1);
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const ProjectInfo = styled.div`
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(16rem, 32rem);
  align-content: center;
  align-items: center;
  column-gap: 5.6rem;
  row-gap: 1.6rem;
  width: 100%;
  padding: 3.2rem 2.4rem;

  ${mediaMaxDesktop1024`
    gap: 1.2rem;
    grid-template-columns: minmax(0, 1fr) minmax(14rem, 28rem);
    padding: 2.8rem 2rem;
  `}

  ${mediaMaxMobile`
    grid-template-columns: 1fr;
    align-content: end;
    align-items: start;
    gap: 2.4rem;
    padding: 2.4rem;
  `}
`;

export const ProjectMain = styled.div`
  min-width: 0;
`;

export const ProjectTitle = styled.h3`
  --project-title-size: 5.8rem;
  --project-title-hover-size: 3.8rem;

  color: ${({ theme }) => theme.techWhite};
  font-size: var(--project-title-size);
  font-weight: 300;
  line-height: 1;
  opacity: 0.78;
  transition:
    font-size 0.45s ease,
    opacity 0.45s ease;

  ${ProjectCard}:hover &,
  ${ProjectCard}:focus-visible & {
    font-size: var(--project-title-hover-size);
    opacity: 1;
  }

  ${mediaMaxDesktop1024`
    --project-title-size: 4.6rem;
    --project-title-hover-size: 3.4rem;
  `}

  ${mediaMaxMobile`
    --project-title-size: 3.2rem;
    --project-title-hover-size: 3.2rem;

    opacity: 1;
  `}
`;

export const ProjectDescription = styled.p`
  max-width: 58ch;
  color: ${({ theme }) => theme.submarine};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.45;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transform: translateY(0.8rem);
  transition:
    margin-top 0.45s ease,
    max-height 0.55s ease,
    opacity 0.45s ease,
    transform 0.45s ease;

  ${ProjectCard}:hover &,
  ${ProjectCard}:focus-visible & {
    margin-top: 1.6rem;
    max-height: 12rem;
    opacity: 1;
    transform: translateY(0);
  }

  ${mediaMaxDesktop1024`
    font-size: 1.1rem;
  `}

  ${mediaMaxMobile`
    margin-top: 1.6rem;
    max-height: none;
    font-size: 1.6rem;
    opacity: 1;
    transform: translateY(0);
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const ProjectStack = styled.span`
  display: block;
  color: ${({ theme }) => theme.fantasia};
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transform: translateY(0.8rem);
  transition:
    margin-top 0.45s ease,
    max-height 0.45s ease,
    opacity 0.45s ease,
    text-shadow 0.45s ease,
    transform 0.45s ease;

  ${ProjectCard}:hover &,
  ${ProjectCard}:focus-visible & {
    margin-top: 1.4rem;
    max-height: 4rem;
    opacity: 1;
    transform: translateY(0);
    text-shadow: 0rem 0rem 1.4rem
      color-mix(in srgb, ${({ theme }) => theme.fantasia} 45%, transparent);
  }

  ${mediaMaxDesktop1024`
    font-size: 0.9rem;
  `}

  ${mediaMaxMobile`
    margin-top: 1.4rem;
    max-height: none;
    font-size: 1.2rem;
    opacity: 1;
    transform: translateY(0);
  `}
`;

export const ProjectSide = styled.div`
  position: relative;
  align-self: stretch;
  min-height: 7.2rem;
  text-align: right;

  ${mediaMaxMobile`
    align-self: auto;
    min-height: auto;
    text-align: left;
  `}
`;

export const ProjectSummary = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  color: ${({ theme }) => theme.fantasia};
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.2;
  opacity: 0.62;
  transform: translateY(-50%);
  transition:
    opacity 0.45s ease,
    transform 0.45s ease;

  ${ProjectCard}:hover &,
  ${ProjectCard}:focus-visible & {
    opacity: 0;
    transform: translateY(-70%);
  }

  ${mediaMaxDesktop1024`
    font-size: 0.9rem;
  `}

  ${mediaMaxMobile`
    display: none;
  `}
`;

export const ProjectCta = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  color: ${({ theme }) => theme.fantasia};
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1;
  opacity: 0;
  transform: translateY(0.8rem);
  transition:
    opacity 0.45s ease,
    transform 0.45s ease;

  svg {
    flex: 0 0 auto;
  }

  ${ProjectCard}:hover &,
  ${ProjectCard}:focus-visible & {
    opacity: 1;
    transform: translateY(0);
  }

  ${mediaMaxDesktop1024`
    font-size: 1rem;
  `}

  ${mediaMaxMobile`
    position: static;
    font-size: 1.2rem;
    opacity: 1;
    transform: translateY(0);
  `}
`;

export const GithubButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const GithubButton = styled.a`
  padding: 1.2rem 4.8rem;
  color: ${({ theme }) => theme.fantasia};
  border: 0.2rem solid ${({ theme }) => theme.fantasia};
  border-radius: 0.2rem;
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.extremeBlack};
    background-color: ${({ theme }) => theme.fantasia};
    transform: translateY(-0.2rem);
    box-shadow: 0rem 0rem 0.5rem ${({ theme }) => theme.fantasia};
  }

  ${mediaMaxDesktop1024`
    padding: 0.8rem 2.4rem;
    font-size: 1.2rem;
  `}

  ${mediaMaxMobile`
    width: 100%;
    padding: 1.6rem 2.4rem;
    font-size: 2rem;
    text-align: center;
  `}
`;

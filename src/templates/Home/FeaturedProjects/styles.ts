import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import AnimatedContent from "@/components/AnimatedContent";
import styled from "styled-components";

export const FeaturedProjectsContainer = styled.section`
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

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: 20rem 20rem 20rem;
  grid-template-areas:
    "alpha alpha alpha alpha alpha alpha beta beta beta gamma gamma gamma"
    "alpha alpha alpha alpha alpha alpha beta beta beta delta delta delta"
    "epsilon epsilon epsilon epsilon zeta zeta zeta zeta zeta zeta zeta zeta";
  gap: 2rem;

  ${mediaMaxDesktop1024`
    grid-template-rows: 18rem 18rem 18rem;
    gap: 1.6rem;
  `}

  ${mediaMaxMobile`
    grid-template-columns: 1fr;
    grid-template-rows: none;
    grid-template-areas:
      "alpha"
      "beta"
      "gamma"
      "delta"
      "epsilon"
      "zeta";
    gap: 2rem;
  `}
`;

export const ProjectAnimation = styled(AnimatedContent)<{ $area: string }>`
  grid-area: ${({ $area }) => $area};
  min-height: 100%;

  > div {
    height: 100%;
  }
`;

export const ProjectCard = styled.a`
  position: relative;
  display: flex;
  min-height: 100%;
  overflow: hidden;
  border: 0.1rem solid ${({ theme }) => theme.borders};
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  box-shadow: 0rem 0.2rem 0.8rem rgba(0, 0, 0, 0.2);
  transform: scale(1);
  transition:
    border-color 0.45s ease,
    box-shadow 0.45s ease,
    transform 0.45s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(16, 16, 16, 0.08) 0%,
      rgba(16, 16, 16, 0.2) 34%,
      rgba(16, 16, 16, 0.86) 100%
    );
    z-index: 1;
  }

  &:hover {
    border-color: color-mix(
      in srgb,
      ${({ theme }) => theme.primary} 48%,
      ${({ theme }) => theme.borders}
    );
    box-shadow:
      0rem 1.2rem 3rem rgba(0, 0, 0, 0.24),
      0rem 0rem 2.4rem
        color-mix(in srgb, ${({ theme }) => theme.primary} 12%, transparent);
    transform: scale(1.01);
  }

  ${mediaMaxMobile`
    min-height: 32rem;
  `}
`;

export const ProjectImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.72;
  transform: scale(1);
  transition:
    opacity 0.45s ease,
    transform 0.65s ease;

  ${ProjectCard}:hover & {
    opacity: 0.9;
    transform: scale(1.04);
  }
`;

export const ProjectInfo = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: stretch;
  gap: 1.6rem;
  width: 100%;
  padding: 2.4rem;

  ${mediaMaxDesktop1024`
    gap: 1.2rem;
    padding: 2rem;
  `}

  ${mediaMaxMobile`
    gap: 1.6rem;
    padding: 2.4rem;
  `}
`;

export const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 1;
  opacity: 0.78;
  transition: opacity 0.45s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }

  ${mediaMaxDesktop1024`
    font-size: 2.2rem;
  `}

  ${mediaMaxMobile`
    font-size: 3.2rem;
  `}
`;

export const ProjectDescription = styled.p`
  max-width: 58ch;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.45;
  opacity: 0.72;
  transition: opacity 0.45s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }

  ${mediaMaxDesktop1024`
    font-size: 1.1rem;
  `}

  ${mediaMaxMobile`
    font-size: 1.6rem;
  `}
`;

export const ProjectStack = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
  opacity: 0.62;
  transition:
    opacity 0.45s ease,
    text-shadow 0.45s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
    text-shadow: 0rem 0rem 1.4rem
      color-mix(in srgb, ${({ theme }) => theme.primary} 45%, transparent);
  }

  ${mediaMaxDesktop1024`
    font-size: 0.9rem;
  `}

  ${mediaMaxMobile`
    font-size: 1.2rem;
  `}
`;

export const GithubButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const GithubButton = styled.a`
  padding: 1.2rem 4.8rem;
  color: ${({ theme }) => theme.primary};
  border: 0.2rem solid ${({ theme }) => theme.primary};
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
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.primary};
    transform: translateY(-0.2rem);
    box-shadow: 0rem 0rem 0.5rem ${({ theme }) => theme.primary};
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

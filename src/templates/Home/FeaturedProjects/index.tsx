import { FC } from "react";
import AnimatedContent from "@/components/AnimatedContent";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import * as S from "./styles";

const projects = [
  {
    description:
      "A focused dashboard for tracking product metrics, deployment health, and team priorities in one operational view.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    stack: "Next.js / TypeScript / Styled Components",
    summary: "Metrics dashboard",
    title: "Pulse Metrics",
  },
  {
    description:
      "A commerce interface built around fast catalog scanning, refined filtering, and a lean checkout flow.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    stack: "React / Zustand / Stripe",
    summary: "Commerce flow",
    title: "Atlas Storefront",
  },
  {
    description:
      "A compact creative tool for generating visual directions and organizing references.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    stack: "React / GSAP",
    summary: "Creative tooling",
    title: "Mood Lab",
  },
  {
    description:
      "A mobile-first finance concept with clean transaction states and quick insights.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    stack: "React Native / Expo",
    summary: "Finance concept",
    title: "Finflow",
  },
  {
    description:
      "A lightweight landing experience for validating SaaS positioning and conversion copy.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    stack: "Next.js / Framer Motion",
    summary: "SaaS validation",
    title: "Signal Launch",
  },
  {
    description:
      "A portfolio case-study system with immersive project media, technical notes, and clear outcomes.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    stack: "Next.js / MDX / Design System",
    summary: "Case study",
    title: "Caseframe",
  },
];

export const FeaturedProjects: FC = () => {
  return (
    <S.FeaturedProjectsContainer id="projects">
      <AnimatedContent>
        <SectionTitle>Featured Projects</SectionTitle>
      </AnimatedContent>

      <S.ProjectsContent>
        <S.ProjectsList>
          {projects.map((project, index) => (
            <S.ProjectAnimation key={project.title} delay={0.12 * index}>
              <S.ProjectCard data-cursor-hover href={project.href}>
                <S.ProjectImage alt={project.title} src={project.image} />
                <S.ProjectInfo>
                  <S.ProjectMain>
                    <S.ProjectTitle>{project.title}</S.ProjectTitle>
                    <S.ProjectDescription>
                      {project.description}
                    </S.ProjectDescription>
                    <S.ProjectStack>{project.stack}</S.ProjectStack>
                  </S.ProjectMain>

                  <S.ProjectSide>
                    <S.ProjectSummary>{project.summary}</S.ProjectSummary>
                    <S.ProjectCta>
                      see more
                      <ArrowUpRight aria-hidden size={16} strokeWidth={2.2} />
                    </S.ProjectCta>
                  </S.ProjectSide>
                </S.ProjectInfo>
              </S.ProjectCard>
            </S.ProjectAnimation>
          ))}
        </S.ProjectsList>

        <AnimatedContent delay={0.4}>
          <S.GithubButtonWrapper>
            <S.GithubButton
              data-cursor-hover
              href="https://github.com/"
              rel="noreferrer"
              target="_blank"
            >
              View all on GitHub
            </S.GithubButton>
          </S.GithubButtonWrapper>
        </AnimatedContent>
      </S.ProjectsContent>
    </S.FeaturedProjectsContainer>
  );
};

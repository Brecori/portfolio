import { FC } from "react";
import AnimatedContent from "@/components/AnimatedContent";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { useProjectSlugs } from "@/slugs";
import { useTranslations } from "next-intl";
import * as S from "./styles";

export const FeaturedProjects: FC = () => {
  const t = useTranslations("featuredProjects");
  const projects = useProjectSlugs();

  return (
    <S.FeaturedProjectsContainer id="projects">
      <AnimatedContent>
        <SectionTitle>{t("title")}</SectionTitle>
      </AnimatedContent>

      <S.ProjectsContent>
        <S.ProjectsList>
          {projects.map((project, index) => {
            const href = project.productionLink ?? project.githubLink ?? "#";

            return (
              <S.ProjectAnimation key={project.slug} delay={0.12 * index}>
                <S.ProjectCard data-cursor-hover href={href}>
                  <S.ProjectImage alt={project.titulo} src={project.image} />
                  <S.ProjectInfo>
                    <S.ProjectMain>
                      <S.ProjectTitle>{project.titulo}</S.ProjectTitle>
                      <S.ProjectDescription>
                        {project.description}
                      </S.ProjectDescription>
                      <S.ProjectStack>
                        {project.stack.join(" / ")}
                      </S.ProjectStack>
                    </S.ProjectMain>

                    <S.ProjectSide>
                      <S.ProjectSummary>{project.summary}</S.ProjectSummary>
                      <S.ProjectCta>
                        {t("actions.seeMore")}
                        <ArrowUpRight aria-hidden size={16} strokeWidth={2.2} />
                      </S.ProjectCta>
                    </S.ProjectSide>
                  </S.ProjectInfo>
                </S.ProjectCard>
              </S.ProjectAnimation>
            );
          })}
        </S.ProjectsList>

        <AnimatedContent delay={0.4}>
          <S.GithubButtonWrapper>
            <S.GithubButton
              data-cursor-hover
              href="https://github.com/"
              rel="noreferrer"
              target="_blank"
            >
              {t("actions.viewAllGithub")}
            </S.GithubButton>
          </S.GithubButtonWrapper>
        </AnimatedContent>
      </S.ProjectsContent>
    </S.FeaturedProjectsContainer>
  );
};

import { FC } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { SectionTitle } from "@/components/SectionTitle";
import { useProjectSlugs } from "@/slugs";
import { useTranslations } from "next-intl";
import * as S from "./styles";

export const Projects: FC = () => {
  const t = useTranslations("projects");
  const projects = useProjectSlugs();

  return (
    <S.ProjectsSection id="projects">
      <S.ProjectsIntro>
        <SectionTitle>{t("title")}</SectionTitle>
      </S.ProjectsIntro>

      <S.ProjectsGrid>
        {projects.map((project, index) => {
          const href = project.productionLink ?? project.githubLink ?? "#";
          const isExternalLink = href.startsWith("http");

          return (
            <S.ProjectAnimation delay={0.12 * index} key={project.slug}>
              <S.ProjectCard
                data-cursor-hover
                href={href}
                rel={isExternalLink ? "noreferrer" : undefined}
                target={isExternalLink ? "_blank" : undefined}
              >
                <S.ProjectImage alt={project.titulo} src={project.image} />
                <S.ProjectOverlay />
                <S.ProjectContent>
                  <S.ProjectMeta>
                    <span>{project.data}</span>
                    <span>{project.summary}</span>
                  </S.ProjectMeta>
                  <S.ProjectTitleWrapper>
                    <S.CardTitle>{project.titulo}</S.CardTitle>
                  </S.ProjectTitleWrapper>
                  <S.ProjectFooter>
                    <S.ProjectStack>{project.stack.join(" / ")}</S.ProjectStack>
                    <S.ProjectAction>
                      {t("actions.openProject")}
                      <FiArrowUpRight aria-hidden size={16} />
                    </S.ProjectAction>
                  </S.ProjectFooter>
                </S.ProjectContent>
              </S.ProjectCard>
            </S.ProjectAnimation>
          );
        })}
      </S.ProjectsGrid>
    </S.ProjectsSection>
  );
};

"use client";

import { FC, KeyboardEvent, useMemo, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { SectionTitle } from "@/components/SectionTitle";
import { useProjectSlugs } from "@/slugs";
import { useTranslations } from "next-intl";
import * as S from "./styles";

const getRelativeOffset = (index: number, activeIndex: number, total: number) => {
  const rawOffset = index - activeIndex;
  const half = Math.floor(total / 2);

  if (rawOffset > half) {
    return rawOffset - total;
  }

  if (rawOffset < -half) {
    return rawOffset + total;
  }

  return rawOffset;
};

export const Projects: FC = () => {
  const t = useTranslations("projects");
  const projects = useProjectSlugs();
  const [activeIndex, setActiveIndex] = useState(0);

  const positionedProjects = useMemo(
    () =>
      projects.map((project, index) => ({
        ...project,
        offset: getRelativeOffset(index, activeIndex, projects.length),
      })),
    [activeIndex, projects],
  );

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrevious = () => {
    setActiveIndex((currentIndex) =>
      (currentIndex - 1 + projects.length) % projects.length,
    );
  };

  const handleNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % projects.length);
  };

  return (
    <S.ProjectsSection id="projects">
      <S.ProjectsIntro>
        <SectionTitle>{t("title")}</SectionTitle>
      </S.ProjectsIntro>

      <S.SliderSection>
        <S.SliderViewport>
          <S.SliderScene aria-label={t("actions.selectProject")} role="list">
            {positionedProjects.map((project, index) => {
              const isActive = project.offset === 0;

              return (
                <S.SlideCard
                  $offset={project.offset}
                  $isActive={isActive}
                  aria-label={`${t("actions.selectProject")}: ${project.titulo}`}
                  data-cursor-hover
                  key={project.slug}
                  onClick={() => handleSelect(index)}
                  onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleSelect(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <S.SlideImage alt={project.titulo} src={project.image} />
                  <S.SlideOverlay />
                  <S.SlideContent $isActive={isActive}>
                    <S.SlideMeta>
                      <span>{project.data}</span>
                      <span>{project.summary}</span>
                    </S.SlideMeta>

                    <S.SlideTitle>{project.titulo}</S.SlideTitle>
                    <S.SlideDescription>{project.description}</S.SlideDescription>

                    <S.SlideStack>
                      {project.stack.map((item) => (
                        <S.SlideBadge key={item}>{item}</S.SlideBadge>
                      ))}
                    </S.SlideStack>

                    <S.SlideLinks>
                      {project.githubLink && project.githubLink !== "#" ? (
                        <S.ProjectLink
                          data-cursor-hover
                          href={project.githubLink}
                          rel="noreferrer"
                          target="_blank"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <FiGithub aria-hidden size={18} />
                          {t("actions.github")}
                        </S.ProjectLink>
                      ) : null}

                      {project.productionLink && project.productionLink !== "#" ? (
                        <S.ProjectLink
                          data-cursor-hover
                          href={project.productionLink}
                          rel="noreferrer"
                          target="_blank"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <FiExternalLink aria-hidden size={18} />
                          {t("actions.liveProject")}
                        </S.ProjectLink>
                      ) : null}
                    </S.SlideLinks>
                  </S.SlideContent>
                </S.SlideCard>
              );
            })}
          </S.SliderScene>
        </S.SliderViewport>

        <S.SliderControls>
          <S.ControlButton
            aria-label="Previous project"
            data-cursor-hover
            onClick={handlePrevious}
            type="button"
          >
            Prev
          </S.ControlButton>

          <S.ControlIndexes>
            {projects.map((project, index) => (
              <S.IndexButton
                $isActive={index === activeIndex}
                aria-label={`${t("actions.selectProject")}: ${project.titulo}`}
                data-cursor-hover
                key={project.slug}
                onClick={() => handleSelect(index)}
                type="button"
              >
                {index + 1}
              </S.IndexButton>
            ))}
          </S.ControlIndexes>

          <S.ControlButton
            aria-label="Next project"
            data-cursor-hover
            onClick={handleNext}
            type="button"
          >
            Next
          </S.ControlButton>
        </S.SliderControls>
      </S.SliderSection>
    </S.ProjectsSection>
  );
};

"use client";

import { FC, useEffect, useMemo, useState } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ProjectModal } from "@/components/ProjectModal";
import { SectionTitle } from "@/components/SectionTitle";
import { useProjectSlugs } from "@/slugs";
import type { ProjectContent } from "@/slugs/props";
import { useTranslations } from "next-intl";
import useAnimation from "./animation";
import * as S from "./styles";

const formatProjectIndex = (index: number) => `${index + 1}`.padStart(2, "0");

export const Projects: FC = () => {
  const t = useTranslations("projects");
  const projects = useProjectSlugs();
  const { sectionRef, setCardRef } = useAnimation(projects.length);
  const [activeSlug, setActiveSlug] = useState<ProjectContent["slug"] | null>(
    null,
  );
  const portalTarget = typeof document !== "undefined" ? document.body : null;

  const activeProject = useMemo(
    () => projects.find((project) => project.slug === activeSlug) ?? null,
    [activeSlug, projects],
  );

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveSlug(null);
      }
    };

    const smoother = ScrollSmoother.get();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    smoother?.paused(true);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      smoother?.paused(false);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  const handleOpenProject = (project: ProjectContent) => {
    if (activeSlug) {
      return;
    }

    setActiveSlug(project.slug);
  };

  return (
    <>
      <S.ProjectsSection id="projects" ref={sectionRef}>
        <S.ProjectsIntro>
          <SectionTitle>{t("title")}</SectionTitle>
        </S.ProjectsIntro>

        <S.CardsRail aria-label={t("actions.selectProject")}>
          {projects.map((project, index) => {
            const isActive = activeSlug === project.slug;

            return (
              <S.CardButton
                aria-label={`${t("actions.selectProject")}: ${project.titulo}`}
                data-cursor-hover
                key={project.slug}
                onClick={() => handleOpenProject(project)}
                ref={setCardRef(index)}
                type="button"
              >
                <S.CardSurface $isActive={isActive}>
                  <S.CardIndex>{formatProjectIndex(index)}</S.CardIndex>
                  <S.CardImage alt={project.titulo} src={project.image} />
                  <S.CardGlow />
                  <S.CardShade />
                  <S.CardContent>
                    <S.CardMeta>
                      <span>{project.data}</span>
                      <span>{project.status}</span>
                    </S.CardMeta>
                    <S.CardTitle>{project.titulo}</S.CardTitle>
                    <S.CardSummary>{project.summary}</S.CardSummary>
                  </S.CardContent>
                </S.CardSurface>
              </S.CardButton>
            );
          })}
        </S.CardsRail>

        {activeProject && portalTarget
          ? (
              <ProjectModal
                onClose={() => setActiveSlug(null)}
                portalTarget={portalTarget}
                project={activeProject}
              />
            )
          : null}
      </S.ProjectsSection>
    </>
  );
};

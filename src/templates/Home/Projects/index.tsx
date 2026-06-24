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
const CARD_TRANSITION_DURATION = 550;

export const Projects: FC = () => {
  const t = useTranslations("projects");
  const projects = useProjectSlugs();
  const { sectionRef, setCardRef } = useAnimation(projects.length);
  const [highlightedSlug, setHighlightedSlug] = useState<
    ProjectContent["slug"] | null
  >(null);
  const [activeSlug, setActiveSlug] = useState<ProjectContent["slug"] | null>(
    null,
  );
  const portalTarget = typeof document !== "undefined" ? document.body : null;

  const activeProject = useMemo(
    () => projects.find((project) => project.slug === activeSlug) ?? null,
    [activeSlug, projects],
  );

  useEffect(() => {
    if (!highlightedSlug || activeSlug) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timeout = window.setTimeout(
      () => setActiveSlug(highlightedSlug),
      prefersReducedMotion ? 0 : CARD_TRANSITION_DURATION,
    );

    return () => window.clearTimeout(timeout);
  }, [activeSlug, highlightedSlug]);

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveSlug(null);
        setHighlightedSlug(null);
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
    if (activeSlug || highlightedSlug) {
      return;
    }

    setHighlightedSlug(project.slug);
  };

  const handleCloseProject = () => {
    setActiveSlug(null);
    setHighlightedSlug(null);
  };

  return (
    <>
      <S.ProjectsSection id="projects" ref={sectionRef}>
        <S.ProjectsIntro>
          <SectionTitle>{t("title")}</SectionTitle>
          <S.ProjectsDeckDescription>
            {t("deckDescription")}
          </S.ProjectsDeckDescription>
        </S.ProjectsIntro>

        <S.CardsRail aria-label={t("actions.selectProject")}>
          {projects.map((project, index) => {
            const isHighlighted = highlightedSlug === project.slug;

            return (
              <S.CardSlot
                $index={index}
                $isHighlighted={isHighlighted}
                $offset={index - (projects.length - 1) / 2}
                key={project.slug}
                ref={setCardRef(index)}
              >
                <S.CardButton
                  aria-label={`${t(
                    isHighlighted
                      ? "actions.openProject"
                      : "actions.selectProject",
                  )}: ${project.titulo}`}
                  aria-pressed={isHighlighted}
                  data-cursor-hover
                  onClick={() => handleOpenProject(project)}
                  type="button"
                >
                  <S.CardSurface
                    $hasHighlight={highlightedSlug !== null}
                    $isHighlighted={isHighlighted}
                  >
                    <S.CardIndex>{formatProjectIndex(index)}</S.CardIndex>
                    <S.CardImage alt={project.titulo} src={project.image} />
                    <S.CardShade />
                    <S.CardContent>
                      <S.CardTitle>{project.titulo}</S.CardTitle>
                      <S.CardSummary>{project.summary}</S.CardSummary>
                    </S.CardContent>
                  </S.CardSurface>
                </S.CardButton>
              </S.CardSlot>
            );
          })}
        </S.CardsRail>

        {activeProject && portalTarget ? (
          <ProjectModal
            onClose={handleCloseProject}
            portalTarget={portalTarget}
            project={activeProject}
          />
        ) : null}
      </S.ProjectsSection>
    </>
  );
};

"use client";

import AnimatedContent from "@/components/AnimatedContent";
import { SectionTitle } from "@/components/SectionTitle";
import { useTranslations } from "next-intl";
import { FC } from "react";
import useAnimation from "./animation";
import * as S from "./styles";

type TrajectoryItem = {
  company: string;
  description: string;
  period: string;
  role: string;
  tags: string[];
};

type TrajectoryYear = {
  items: TrajectoryItem[];
  year: string;
};

export const Trajectory: FC = () => {
  const t = useTranslations("trajectory");
  const years = t.raw("years") as TrajectoryYear[];
  const { activeYearIndex, sectionRef, timelineRef, titleRef } =
    useAnimation();

  return (
    <S.TrajectoryContainer id="trajectory" ref={sectionRef}>
      <S.SectionHeader ref={titleRef}>
        <AnimatedContent>
          <SectionTitle>{t("title")}</SectionTitle>
        </AnimatedContent>
      </S.SectionHeader>

      <S.Timeline aria-label={t("title")} ref={timelineRef}>
        <S.TimelineContent>
          <S.TimelineMarker aria-hidden="true" data-trajectory-marker />

          {years.map((yearGroup, yearIndex) => (
            <S.YearGroup data-trajectory-year key={yearGroup.year}>
              <S.YearLabel $active={yearIndex === activeYearIndex}>
                <span>{yearGroup.year}</span>
              </S.YearLabel>

            <S.Rail aria-hidden="true" />

              <S.YearContent $active={yearIndex === activeYearIndex}>
                {yearGroup.items.map((item, itemIndex) => (
                  <AnimatedContent
                    delay={0.12 * (yearIndex + itemIndex)}
                    key={`${yearGroup.year}-${item.role}`}
                  >
                    <S.TrajectoryCard>
                      <S.CardMeta>{item.period}</S.CardMeta>
                      <S.CardTitle>{item.role}</S.CardTitle>
                      <S.CardCompany>{item.company}</S.CardCompany>
                      <S.CardDescription>{item.description}</S.CardDescription>

                      <S.TagsList>
                        {item.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </S.TagsList>
                    </S.TrajectoryCard>
                  </AnimatedContent>
                ))}
              </S.YearContent>
            </S.YearGroup>
          ))}
        </S.TimelineContent>
      </S.Timeline>
    </S.TrajectoryContainer>
  );
};

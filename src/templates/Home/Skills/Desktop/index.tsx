"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { Skill, orbitSkills, skillTypes } from "../constants";
import useAnimation from "../animation";
import * as S from "./styles";

export const SkillsDesktop: FC = () => {
  const t = useTranslations("skills");
  const {
    activateSkill,
    activeSkill,
    activeTypeIndex,
    deactivateSkill,
    innerOrbitRef,
    outerOrbitRef,
    sectionRef,
    setInnerSkillPointRef,
    setOuterSkillPointRef,
  } = useAnimation();

  const renderSkillPoint = (
    skill: Skill,
    orbitIndex: number,
    setSkillPointRef: (index: number) => (element: HTMLButtonElement | null) => void,
  ) => {
    const Icon = skill.icon;
    const isActive = activeSkill.key === skill.key;

    return (
      <S.SkillPoint
        aria-label={`${t(`items.${skill.key}`)} - ${t(`types.${skill.type}`)}`}
        $isActive={isActive}
        data-cursor-hover
        key={skill.key}
        onBlur={deactivateSkill}
        onFocus={() => activateSkill(skill.key)}
        onMouseEnter={() => activateSkill(skill.key)}
        onMouseLeave={deactivateSkill}
        ref={setSkillPointRef(orbitIndex)}
        type="button"
      >
        <S.SkillPointVisual $isActive={isActive}>
          <Icon aria-hidden="true" />
        </S.SkillPointVisual>
        <S.SkillTooltip>{t(`items.${skill.key}`)}</S.SkillTooltip>
      </S.SkillPoint>
    );
  };

  return (
    <S.SkillsContainer id="skills" ref={sectionRef}>
      <S.OrbitArea>
        <S.BackgroundWord aria-hidden="true">{t("title")}</S.BackgroundWord>

        <S.OrbitRail $size="large" aria-hidden="true" />
        <S.OrbitRail $size="medium" aria-hidden="true" />

        <S.CenterCore data-cursor-hover>
          <S.CenterLabel>{t("selected")}</S.CenterLabel>
          <S.TypeViewport aria-live="polite">
            <S.TypeTrack $activeIndex={activeTypeIndex}>
              {skillTypes.map((type) => (
                <S.TypeName key={type}>{t(`types.${type}`)}</S.TypeName>
              ))}
            </S.TypeTrack>
          </S.TypeViewport>
          <S.SkillName>{t(`items.${activeSkill.key}`)}</S.SkillName>
        </S.CenterCore>

        <S.SkillOrbit
          $size="large"
          aria-label={t("orbitLabel")}
          ref={outerOrbitRef}
        >
          {orbitSkills.outer.map((skill, index) =>
            renderSkillPoint(skill, index, setOuterSkillPointRef),
          )}
        </S.SkillOrbit>

        <S.SkillOrbit
          $size="medium"
          aria-label={t("orbitLabel")}
          ref={innerOrbitRef}
        >
          {orbitSkills.inner.map((skill, index) =>
            renderSkillPoint(skill, index, setInnerSkillPointRef),
          )}
        </S.SkillOrbit>
      </S.OrbitArea>
    </S.SkillsContainer>
  );
};

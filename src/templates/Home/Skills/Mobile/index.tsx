"use client";

import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import AnimatedContent from "@/components/AnimatedContent";
import { SectionTitle } from "@/components/SectionTitle";
import { Skill, skills, skillTypes } from "../constants";
import * as S from "./styles";

export const SkillsMobile: FC = () => {
  const t = useTranslations("skills");
  const [activeSkill, setActiveSkill] = useState<Skill>(skills[2]);
  const activeTypeIndex = skillTypes.indexOf(activeSkill.type);

  return (
    <S.MobileSkillsContainer id="skills">
      <AnimatedContent>
        <SectionTitle>{t("title")}</SectionTitle>
      </AnimatedContent>

      <S.MobileContent>
        <S.MobileGroups>
          {skillTypes.map((type, index) => {
            const typeSkills = skills.filter((skill) => skill.type === type);

            if (typeSkills.length === 0) return null;

            return (
              <AnimatedContent delay={0.1 * index} key={type}>
                <S.MobileGroup>
                  <S.MobileGroupTitle>{t(`types.${type}`)}</S.MobileGroupTitle>
                  <S.MobileSkillList>
                    {typeSkills.map((skill) => {
                      const Icon = skill.icon;
                      const isActive = activeSkill.key === skill.key;

                      return (
                        <li key={skill.key}>
                          <S.MobileSkillButton
                            $isActive={isActive}
                            aria-pressed={isActive}
                            data-cursor-hover
                            onClick={() => setActiveSkill(skill)}
                            type="button"
                          >
                            <Icon aria-hidden="true" />
                            <span>{t(`items.${skill.key}`)}</span>
                          </S.MobileSkillButton>
                        </li>
                      );
                    })}
                  </S.MobileSkillList>
                </S.MobileGroup>
              </AnimatedContent>
            );
          })}
        </S.MobileGroups>

        <S.MobileCenterCore data-cursor-hover>
          <S.CenterLabel>{t("selected")}</S.CenterLabel>
          <S.TypeViewport aria-live="polite">
            <S.TypeTrack $activeIndex={activeTypeIndex}>
              {skillTypes.map((type) => (
                <S.TypeName key={type}>{t(`types.${type}`)}</S.TypeName>
              ))}
            </S.TypeTrack>
          </S.TypeViewport>
          <S.SkillName>{t(`items.${activeSkill.key}`)}</S.SkillName>
        </S.MobileCenterCore>
      </S.MobileContent>
    </S.MobileSkillsContainer>
  );
};

import { FC } from "react";
import * as S from "./styles";
import { SectionTitle } from "@/components/SectionTitle";
import { StackCard } from "./StackCard";
import AnimatedContent from "@/components/AnimatedContent";
import { useTranslations } from "next-intl";
import C from "./constants";

export const Stacks: FC = () => {
  const t = useTranslations("stacks");

  return (
    <S.StacksContainer id="stacks">
      <AnimatedContent>
        <SectionTitle>{t("title")}</SectionTitle>
      </AnimatedContent>
      <S.StacksGrid>
        <AnimatedContent delay={0.3}>
          <StackCard
            featured
            icon={C.featuredStack.icon}
            number={C.featuredStack.number}
            stacks={C.featuredStack.stackKeys.map((stackKey) => t(stackKey))}
            title={t(C.featuredStack.titleKey)}
          />
        </AnimatedContent>

        <S.SecondaryGrid>
          {C.secondaryStacks.map(
            ({ icon: Icon, number, stackKeys, titleKey }, index) => (
              <AnimatedContent key={titleKey} delay={0.4 * index}>
                <StackCard
                  icon={Icon}
                  key={titleKey}
                  number={number}
                  stacks={stackKeys.map((stackKey) => t(stackKey))}
                  title={t(titleKey)}
                />
              </AnimatedContent>
            ),
          )}
        </S.SecondaryGrid>
      </S.StacksGrid>
    </S.StacksContainer>
  );
};

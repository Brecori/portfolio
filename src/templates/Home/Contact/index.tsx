"use client";

import AnimatedContent from "@/components/AnimatedContent";
import { FC } from "react";
import { IconLink } from "@/components/IconLink";
import { useTranslations } from "next-intl";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import * as S from "./styles";

const contactLinks = {
  // Replace placeholders with your preferred contact endpoints.
  email: "mailto:hello@brenotosi.dev",
  github: "https://github.com/brenotosi",
  linkedin: "https://www.linkedin.com/in/brenotosi",
  whatsapp: "https://wa.me/5511999999999",
} as const;

const contactIcons = {
  email: MdOutlineMail,
  github: SiGithub,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
} as const;

type ContactKey = keyof typeof contactLinks;

export const Contact: FC = () => {
  const t = useTranslations("contact");
  const items = t.raw("items") as Record<ContactKey, string>;
  const title = t("title");

  return (
    <S.ContactSection id="contact">
      <S.ContactInner stagger={0.2} duration={1.6}>
        <S.ContactEyebrow>{t("eyebrow")}</S.ContactEyebrow>
        <S.ContactTitle>{title}</S.ContactTitle>

        <AnimatedContent delay={0.3}>
          <S.ContactList>
            {(Object.keys(contactLinks) as ContactKey[]).map((contactKey) => {
              const Icon = contactIcons[contactKey];
              const label = items[contactKey];

              return (
                <S.ContactItem key={contactKey}>
                  <IconLink
                    href={contactLinks[contactKey]}
                    icon={Icon}
                    label={label}
                  />
                </S.ContactItem>
              );
            })}
          </S.ContactList>
        </AnimatedContent>
      </S.ContactInner>
    </S.ContactSection>
  );
};

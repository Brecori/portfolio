import { FC } from "react";
import { IconLink } from "@/components/IconLink";
import { github, linkedin } from "@/constants/contact";
import { useTranslations } from "next-intl";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import * as S from "./styles";

const contactLinks = {
  // Replace placeholders with your preferred contact endpoints.
  email: "mailto:brenotosi14gmail.com",
  github,
  linkedin,
  whatsapp: "https://wa.me/5511964295929",
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

        <S.ContactList delay={0.3} stagger={0.2}>
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
      </S.ContactInner>
    </S.ContactSection>
  );
};

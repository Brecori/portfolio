"use client";

import { FC } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import type { ProjectModalProps } from "./props";
import * as S from "./styles";

export const ProjectModal: FC<ProjectModalProps> = ({
  onClose,
  portalTarget,
  project,
}) => {
  const t = useTranslations("projects");
  const titleId = `${project.slug}`;

  return createPortal(
    <S.ModalOverlay aria-hidden="true" data-cursor-hover onClick={onClose}>
      <S.ModalCard
        aria-labelledby={titleId}
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <S.ModalMedia>
          <S.ModalImage alt={project.titulo} src={project.image} />
        </S.ModalMedia>

        <S.ModalBody>
          <S.ModalCloseButton
            aria-label={t("actions.closeProject")}
            data-cursor-hover
            onClick={onClose}
            type="button"
          >
            <FiX aria-hidden size={18} />
          </S.ModalCloseButton>

          <S.ModalHeader>
            <S.ModalEyebrow>
              <span>{project.data}</span>
              <span>{project.status}</span>
            </S.ModalEyebrow>
            <S.ModalTitle id={titleId}>{project.titulo}</S.ModalTitle>
            <S.ModalDescription>{project.description}</S.ModalDescription>
          </S.ModalHeader>

          <S.ModalInfoGrid>
            <S.ModalInfoBlock>
              <S.ModalInfoLabel>{t("labels.stack")}</S.ModalInfoLabel>
              <S.ModalStack>
                {project.stack.map((item) => (
                  <S.ModalStackItem key={item}>{item}</S.ModalStackItem>
                ))}
              </S.ModalStack>
            </S.ModalInfoBlock>

            <S.ModalInfoBlock>
              <S.ModalInfoLabel>{t("labels.links")}</S.ModalInfoLabel>
              <S.ModalLinks>
                {project.githubLink && project.githubLink !== "#" ? (
                  <S.ProjectLink
                    data-cursor-hover
                    href={project.githubLink}
                    rel="noreferrer"
                    target="_blank"
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
                  >
                    <FiExternalLink aria-hidden size={18} />
                    {t("actions.liveProject")}
                  </S.ProjectLink>
                ) : null}
              </S.ModalLinks>
            </S.ModalInfoBlock>
          </S.ModalInfoGrid>
        </S.ModalBody>
      </S.ModalCard>
    </S.ModalOverlay>,
    portalTarget,
  );
};

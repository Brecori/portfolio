"use client";

import { FC } from "react";
import { IconLinkProps } from "./props";
import * as S from "./styles";

export const IconLink: FC<IconLinkProps> = ({
  download,
  href,
  icon: Icon,
  label,
}) => {
  const isDownload = Boolean(download);

  return (
    <S.Link
      aria-label={label}
      data-cursor-hover
      download={isDownload ? download : undefined}
      href={href}
      rel={isDownload ? undefined : "noreferrer"}
      target={isDownload ? undefined : "_blank"}
    >
      <Icon aria-hidden="true" />
      <S.Label>{label}</S.Label>
      <S.Tooltip>{label}</S.Tooltip>
    </S.Link>
  );
};

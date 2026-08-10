"use client";

import NavbarConstants from "@/templates/shared/Navbar/constants";
import type { PageLoaderProps } from "./props";
import * as S from "./styles";

export const PageLoader = ({ fixed = true, visible = true }: PageLoaderProps) => {
  return (
    <S.Overlay
      $fixed={fixed}
      $visible={visible}
      aria-label="Carregando"
      aria-busy={visible}
    >
      <S.Logo aria-hidden="true">{NavbarConstants.title}</S.Logo>
    </S.Overlay>
  );
};

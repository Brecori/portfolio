"use client";

import { FC } from "react";
import { ChevronDownIcon } from "lucide-react";
import { scrollToElement } from "@/lib/smooth-scroll";
import * as S from "./styles";

type ScrollDownButtonProps = {
  label: string;
};

export const ScrollDownButton: FC<ScrollDownButtonProps> = ({ label }) => {
  const handleClick = () => {
    scrollToElement("stacks");
  };

  return (
    <S.Button type="button" aria-label={label} onClick={handleClick}>
      <S.Label>{label}</S.Label>
      <ChevronDownIcon />
    </S.Button>
  );
};

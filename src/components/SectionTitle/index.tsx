"use client";

import { FC, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { SectionTitleProps } from "./props";

export const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const title = titleRef.current;

    if (!title) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(title);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <S.Title ref={titleRef} $isVisible={isVisible}>
      {children}
    </S.Title>
  );
};

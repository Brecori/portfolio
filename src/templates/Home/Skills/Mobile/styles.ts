import { mediaMaxMobile } from "@/lib/media-query";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const MobileSkillsContainer = styled.section`
  position: relative;
  display: grid;
  gap: 7rem;
  overflow: hidden;
  padding: 9rem 7.5rem 11rem;

  ${mediaMaxMobile`
    gap: 6rem;
    padding: 8rem 2.4rem 10rem;
  `}
`;

export const MobileContent = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
  gap: 8rem;

  ${mediaMaxMobile`
    gap: 7rem;
  `}
`;

export const MobileGroups = styled.div`
  display: grid;
  width: 100%;
  gap: 3rem;

  ${mediaMaxMobile`
    gap: 2.4rem;
  `}
`;

export const MobileGroup = styled.div`
  display: grid;
  gap: 1.8rem;

  ${mediaMaxMobile`
    gap: 1.6rem;
  `}
`;

export const MobileGroupTitle = styled.h3`
  color: ${theme.submarine};
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  opacity: 0.54;

  ${mediaMaxMobile`
    font-size: 1.55rem;
  `}
`;

export const MobileSkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;

  ${mediaMaxMobile`
    gap: 1.4rem;
  `}
`;

export const MobileSkillButton = styled.button<{ $isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 1.1rem;
  min-height: 5.8rem;
  border: 0.1rem solid
    ${({ $isActive }) =>
      $isActive
        ? `color-mix(in srgb, ${theme.fantasia} 52%, ${theme.techWhite10})`
        : theme.techWhite10};
  border-radius: 0.4rem;
  padding: 0 1.8rem;
  color: ${({ $isActive }) =>
    $isActive ? theme.fantasia : theme.submarine};
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 1;
  transform: scale(${({ $isActive }) => ($isActive ? 1.05 : 1)});
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;

  svg {
    width: 2.6rem;
    height: 2.6rem;
  }

  ${mediaMaxMobile`
    gap: 1rem;
    min-height: 5.2rem;
    padding: 0 1.5rem;
    font-size: 1.55rem;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`;

export const MobileCenterCore = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 27rem;
  aspect-ratio: 1;
  border: 0.15rem solid
    color-mix(in srgb, ${theme.submarine} 72%, transparent);
  border-radius: 50%;
  background:
    radial-gradient(
      circle,
      color-mix(in srgb, ${theme.fantasia} 20%, transparent),
      transparent 72%
    ),
    ${theme.codGray};
  box-shadow:
    0 0 10rem
      color-mix(in srgb, ${theme.fantasia} 25%, transparent),
    inset 0 0 2.2rem rgba(245, 245, 245, 0.035);
  padding: 2.8rem;
  text-align: center;

  ${mediaMaxMobile`
    padding: 2.4rem;
    width: 22rem;
  `}
`;

export const CenterLabel = styled.span`
  align-self: end;
  color: ${theme.submarine};
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  opacity: 0.44;

  ${mediaMaxMobile`
    font-size: 1.25rem;
  `}
`;

export const TypeViewport = styled.div`
  width: 100%;
  height: 3.2rem;
  overflow: hidden;

  ${mediaMaxMobile`
    height: 2.8rem;
  `}
`;

export const TypeTrack = styled.div<{ $activeIndex: number }>`
  display: grid;
  transition: transform 820ms cubic-bezier(0.2, 0.8, 0.2, 1);
  transform: translateY(${({ $activeIndex }) => $activeIndex * -3.2}rem);

  ${mediaMaxMobile`
    transform: translateY(${({ $activeIndex }) => $activeIndex * -2.8}rem);
  `}
`;

export const TypeName = styled.strong`
  height: 3.2rem;
  color: ${theme.techWhite};
  font-size: 2.55rem;
  font-weight: 700;
  line-height: 3.2rem;
  text-transform: uppercase;

  ${mediaMaxMobile`
    height: 2.8rem;
    font-size: 2.25rem;
    line-height: 2.8rem;
  `}
`;

export const SkillName = styled.span`
  align-self: start;
  min-height: 1.8rem;
  color: ${theme.fantasia};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.4;
  opacity: 1;
  text-shadow: 0 0 1.2rem
    color-mix(in srgb, ${theme.fantasia} 44%, transparent);

  ${mediaMaxMobile`
    min-height: 1.6rem;
    font-size: 1.35rem;
  `}
`;

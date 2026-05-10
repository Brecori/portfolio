import { mediaMaxMobile } from "@/lib/media-query";
import styled from "styled-components";

export const MobileSkillsContainer = styled.section`
  position: relative;
  display: grid;
  gap: 6rem;
  overflow: hidden;
  padding: 8rem 2.4rem 10rem;
`;

export const MobileContent = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
  gap: 7rem;
`;

export const MobileGroups = styled.div`
  display: grid;
  width: 100%;
  gap: 2.4rem;
`;

export const MobileGroup = styled.div`
  display: grid;
  gap: 1.6rem;
`;

export const MobileGroupTitle = styled.h3`
  color: ${({ theme }) => theme.submarine};
  font-size: 1.55rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  opacity: 0.54;
`;

export const MobileSkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
`;

export const MobileSkillButton = styled.button<{ $isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  min-height: 5.2rem;
  border: 0.1rem solid
    ${({ $isActive, theme }) =>
      $isActive
        ? `color-mix(in srgb, ${theme.fantasia} 52%, ${theme.techWhite10})`
        : theme.techWhite10};
  border-radius: 0.4rem;
  padding: 0 1.5rem;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.fantasia : theme.submarine};
  font-size: 1.55rem;
  font-weight: 700;
  line-height: 1;
  transition:
    border-color 0.3s ease,
    color 0.3s ease;

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const MobileCenterCore = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 24rem;
  aspect-ratio: 1;
  border: 0.15rem solid
    color-mix(in srgb, ${({ theme }) => theme.submarine} 72%, transparent);
  border-radius: 50%;
  background:
    radial-gradient(
      circle,
      color-mix(in srgb, ${({ theme }) => theme.fantasia} 20%, transparent),
      transparent 72%
    ),
    ${({ theme }) => theme.codGray};
  box-shadow:
    0 0 10rem
      color-mix(in srgb, ${({ theme }) => theme.fantasia} 25%, transparent),
    inset 0 0 2.2rem rgba(245, 245, 245, 0.035);
  padding: 2.4rem;
  text-align: center;

  ${mediaMaxMobile`
    width: 22rem;
  `}
`;

export const CenterLabel = styled.span`
  align-self: end;
  color: ${({ theme }) => theme.submarine};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  opacity: 0.44;
`;

export const TypeViewport = styled.div`
  width: 100%;
  height: 2.8rem;
  overflow: hidden;
`;

export const TypeTrack = styled.div<{ $activeIndex: number }>`
  display: grid;
  transition: transform 820ms cubic-bezier(0.2, 0.8, 0.2, 1);
  transform: translateY(${({ $activeIndex }) => $activeIndex * -2.8}rem);
`;

export const TypeName = styled.strong`
  height: 2.8rem;
  color: ${({ theme }) => theme.techWhite};
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.8rem;
  text-transform: uppercase;
`;

export const SkillName = styled.span`
  align-self: start;
  min-height: 1.6rem;
  color: ${({ theme }) => theme.fantasia};
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.4;
  opacity: 1;
  text-shadow: 0 0 1.2rem
    color-mix(in srgb, ${({ theme }) => theme.fantasia} 44%, transparent);
`;

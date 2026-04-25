import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import styled, { css } from "styled-components";

export const Card = styled.article<{ $featured: boolean }>`
  position: relative;
  overflow: hidden;
  display: grid;
  gap: ${({ $featured }) => ($featured ? "5rem" : "2.4rem")};
  min-height: 22rem;
  border: 0.1rem solid ${({ theme }) => theme.borders};
  border-radius: 0.4rem;
  padding: 2.8rem;
  box-shadow: 0rem 0.2rem 0.8rem rgba(0, 0, 0, 0.2);

  ${mediaMaxDesktop1024`
    gap: ${({ $featured }) => ($featured ? "3.6rem" : "2rem")};
    min-height: 16rem;
    padding: 2rem;
  `}

  ${mediaMaxMobile`
    gap: 4rem;
    min-height: 20rem;
    padding: 2.4rem;
  `}
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  svg {
    width: 2.8rem;
    height: 2.8rem;
    color: ${({ theme }) => theme.primary};
    stroke-width: 1.6;

    ${mediaMaxDesktop1024`
      width: 2.2rem;
      height: 2.2rem;
    `}

    ${mediaMaxMobile`
      width: 3rem;
      height: 3rem;
    `}
  }
`;

export const CardNumber = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;

  ${mediaMaxDesktop1024`
    font-size: 1.1rem;
  `}

  ${mediaMaxMobile`
    font-size: 1.5rem;
  `}
`;

export const CardContent = styled.div<{ $featured: boolean }>`
  display: grid;
  gap: ${({ $featured }) => ($featured ? "3.2rem" : "1.6rem")};
  align-self: end;

  ${mediaMaxDesktop1024`
    gap: ${({ $featured }) => ($featured ? "2.4rem" : "1.2rem")};
  `}

  ${mediaMaxMobile`
    gap: 2.4rem;
  `}

  ${({ $featured }) =>
    $featured &&
    css`
      grid-template-columns: minmax(18rem, 0.72fr) 1fr;
      align-items: end;

      ${mediaMaxMobile`
        grid-template-columns: 1fr;
        gap: 3rem;
        align-items: start;
      `}
    `}
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 4.2rem;
  font-weight: 600;
  line-height: 1;

  ${mediaMaxDesktop1024`
    font-size: 2.8rem;
  `}

  ${mediaMaxMobile`
    font-size: 4rem;
  `}
`;

export const StackList = styled.ul<{ $featured: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ $featured }) =>
    $featured ? "flex-end" : "flex-start"};
  gap: 3rem;

  ${mediaMaxDesktop1024`
    gap: 1.6rem;
  `}

  ${mediaMaxMobile`
    gap: 1.6rem 3.2rem;
  `}

  ${mediaMaxMobile`
    justify-content: flex-start;
  `}
`;

export const StackItem = styled.li`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1;

  ${mediaMaxDesktop1024`
    font-size: 1.1rem;
  `}

  ${mediaMaxMobile`
    font-size: 1.6rem;
  `}
`;

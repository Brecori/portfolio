import { mediaMaxDesktop1024, mediaMaxIpadVertical, mediaMaxMobile } from "@/lib/media-query";
import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.submarine};
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition:
    color 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  svg {
    width: 3rem;
    height: 3rem;
    color: ${({ theme }) => theme.fantasia};
  }

  &:hover {
    transform: translateY(0.5rem);
    color: ${({ theme }) => theme.techWhite};
  }

  ${mediaMaxIpadVertical`
    align-self: center;

    svg {
      width: 4rem;
      height: 4rem;
    }
  `}

  ${mediaMaxMobile`
    font-size: 1.4rem;

    svg {
      width: 3.6rem;
      height: 3.6rem;
    }
  `}
`;

export const Label = styled.span`
  font-size: 1.4rem;

  ${mediaMaxDesktop1024`
    font-size: 1rem;
  `}

  ${mediaMaxIpadVertical`
    font-size: 1.2rem;
  `}

  ${mediaMaxMobile`
    font-size: 1.4rem;
  `}
`;

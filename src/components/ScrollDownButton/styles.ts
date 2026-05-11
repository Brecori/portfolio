import { mediaMaxMobile } from "@/lib/media-query";
import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  left: 50%;
  bottom: 10rem;
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
  transform: translateX(-50%);

  svg {
    width: 3rem;
    height: 3rem;
    color: ${({ theme }) => theme.fantasia};
  }

  &:hover {
    transform: translate(-50%, 0.5rem);
    color: ${({ theme }) => theme.techWhite};
  }

  ${mediaMaxMobile`
    align-self: center;
    font-size: 1.4rem;
    bottom: 20rem;

    svg {
      width: 3.6rem;
      height: 3.6rem;
    }
  `}
`;

export const Label = styled.span``;

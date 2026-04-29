import { mediaMaxMobile } from "@/lib/media-query";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    transform: translate3d(-50%, 0, 0);
  }

  50% {
    transform: translate3d(-50%, 0.8rem, 0);
  }
`;

const mobileBounce = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(0, 0.8rem, 0);
  }
`;

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
  animation: ${bounce} 2s ease-in-out infinite;
  transition: color 0.3s ease-in-out;

  svg {
    width: 3rem;
    height: 3rem;
    color: ${({ theme }) => theme.fantasia};
  }

  &:hover {
    color: ${({ theme }) => theme.techWhite};
  }

  ${mediaMaxMobile`
    position: static;
    align-self: center;
    margin-top: 10rem;
    font-size: 1.4rem;
    animation-name: ${mobileBounce};

    svg {
      width: 3.6rem;
      height: 3.6rem;
    }
  `}
`;

export const Label = styled.span``;

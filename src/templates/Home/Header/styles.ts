import AnimatedContent from "@/components/AnimatedContent";
import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import styled, { keyframes } from "styled-components";

const pdfButtonShine = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(120%, 120%, 0);
  }
`;

export const HeaderContainer = styled.header`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 15rem;
  justify-content: space-between;

  ${mediaMaxDesktop1024`
    min-height: auto;
    padding: 15rem 7.5rem 10rem;
  `}

  ${mediaMaxMobile`
    padding: 20rem 2.4rem 10rem;
  `}
`;

export const LeftGroup = styled(AnimatedContent)`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  ${mediaMaxDesktop1024`
    gap: 2rem;
  `}

  ${mediaMaxMobile`
    gap: 3rem;
  `}
`;

export const Title = styled.h1`
  font-size: 8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textPrimary};
  letter-spacing: -0.05em;

  ${mediaMaxDesktop1024`
    font-size: 6rem;
  `}

  ${mediaMaxMobile`
    font-size: 5rem;
  `}
`;

export const SpanTitle = styled.span<{ $purple: boolean }>`
  color: ${({ $purple, theme }) =>
    $purple ? theme.primary : theme.textSecondary};
`;

export const Description = styled.p`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 70ch;
  letter-spacing: 0.02em;
  line-height: 1.5;

  ${mediaMaxDesktop1024`
    font-size: 1.2rem;
  `}

  ${mediaMaxMobile`
    font-size: 1.8rem;
    max-width: 80%;
  `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;

  ${mediaMaxDesktop1024`
    margin-top: 1.5rem;
  `}

  ${mediaMaxMobile`
    flex-direction: column;
    gap: 3rem;
  `}
`;

export const Button = styled.a`
  padding: 1.2rem 4.8rem;
  color: ${({ theme }) => theme.background};
  background-color: ${({ theme }) => theme.primary};
  border: 0.2rem solid transparent;
  font-size: 1.6rem;
  text-transform: uppercase;
  border-radius: 0.2rem;
  font-weight: 500;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0rem 0rem 0.5rem ${({ theme }) => theme.primary};
  }

  ${mediaMaxDesktop1024`
    padding: 0.8rem 2.4rem;
    font-size: 1.2rem;
  `}

  ${mediaMaxMobile`
    padding: 1.6rem 2.4rem;
    font-size: 2rem;
    text-align: center;
    width: 100%;
  `}
`;

export const PdfButton = styled.button`
  position: relative;
  overflow: hidden;
  padding: 1.2rem 4.8rem;
  color: ${({ theme }) => theme.primary};
  background-color: transparent;
  border: 0.2rem solid ${({ theme }) => theme.primary};
  font-size: 1.6rem;
  text-transform: uppercase;
  border-radius: 0.2rem;
  font-weight: 500;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: -140%;
    left: -140%;
    width: 180%;
    height: 180%;
    background: linear-gradient(
      135deg,
      transparent 0%,
      transparent 44%,
      ${({ theme }) => theme.primary} 44%,
      ${({ theme }) => theme.primary} 56%,
      transparent 56%,
      transparent 100%
    );
    transform: translate3d(0, 0, 0);
    pointer-events: none;
  }

  &:hover {
    &::before {
      animation: ${pdfButtonShine} 0.8s ease-out;
    }
  }

  ${mediaMaxDesktop1024`
    padding: 0.8rem 2.4rem;
    font-size: 1.2rem;
  `}

  ${mediaMaxMobile`
    padding: 1.6rem 2.4rem;
    font-size: 2rem;
    text-align: center;
    width: 100%;
  `}
`;

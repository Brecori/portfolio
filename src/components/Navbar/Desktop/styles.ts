import { mediaMaxDesktop1024 } from "@/lib/media-query";
import styled from "styled-components";

const transitionDuration = "0.4s";

export const NavbarContainer = styled.nav<{ $hasScrolled: boolean }>`
  height: ${({ $hasScrolled }) => ($hasScrolled ? "6rem" : "8rem")};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  background-color: ${({ $hasScrolled }) =>
    $hasScrolled ? "var(--color-background-secondary)" : "transparent"};
  padding: 0 15rem;
  align-items: center;
  position: fixed;
  z-index: 30;
  transition:
    background-color ${transitionDuration} ease-in-out,
    height ${transitionDuration} ease-in-out;

  ${mediaMaxDesktop1024`
    padding: 0 7.5rem;
    height: 7rem;
  `}
`;

export const Logo = styled.div`
  justify-self: start;
  font-size: 2.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};

  span {
    color: ${({ theme }) => theme.primary};
  }

  ${mediaMaxDesktop1024`
    font-size: 1.8rem;
  `}
`;

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  justify-self: center;
`;

export const MenuItem = styled.li`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition:
    color ${transitionDuration} ease-in-out,
    transform ${transitionDuration} ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-0.2rem);
  }

  ${mediaMaxDesktop1024`
    font-size: 1.2rem;
  `}
`;

export const TogglesContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-self: end;
`;

export const LanguageToggleText = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.textSecondary};
  transition: color ${transitionDuration} ease-in-out;
  text-transform: uppercase;

  ${mediaMaxDesktop1024`
    font-size: 0.85rem;
  `}
`;

export const LanguageToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  width: 3.5rem;

  svg {
    color: ${({ theme }) => theme.textSecondary};
    transition: color ${transitionDuration} ease-in-out;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.textPrimary};
    }

    ${LanguageToggleText} {
      color: ${({ theme }) => theme.textPrimary};
    }
  }

  ${mediaMaxDesktop1024`
    svg {
      width: 2rem;
      height: 2rem;
    }
  `}
`;

export const ThemeToggleButton = styled(LanguageToggleButton)`
  width: 3.5rem;
`;

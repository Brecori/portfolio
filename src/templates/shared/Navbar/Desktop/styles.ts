import { Link } from "@/i18n/navigation";
import { mediaMaxDesktop1024 } from "@/lib/media-query";
import styled from "styled-components";

const transitionDuration = "0.4s";

export const NavbarContainer = styled.nav<{ $hasScrolled: boolean }>`
  height: ${({ $hasScrolled }) => ($hasScrolled ? "6rem" : "8rem")};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  background-color: ${({ $hasScrolled, theme }) =>
    $hasScrolled ? theme.extremeBlack : "transparent"};
  padding: 0 15rem;
  align-items: center;
  position: fixed;
  border-bottom: 0.1rem solid
    ${({ theme, $hasScrolled }) =>
      $hasScrolled ? theme.techWhite10 : "transparent"};
  z-index: 30;
  transition:
    border-bottom-color ${transitionDuration} ease-in-out,
    background-color ${transitionDuration} ease-in-out,
    height ${transitionDuration} ease-in-out;

  ${mediaMaxDesktop1024`
    padding: 0 7.5rem;
    height: 7rem;
  `}
`;

export const Logo = styled(Link)`
  justify-self: start;
  font-size: 2.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.techWhite};

  span {
    color: ${({ theme }) => theme.fantasia};
  }

  ${mediaMaxDesktop1024`
    font-size: 1.6rem;
  `}
`;

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  justify-self: center;
`;

export const MenuItem = styled.li`
  button {
    color: ${({ theme }) => theme.submarine};
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition:
      color ${transitionDuration} ease-in-out,
      transform ${transitionDuration} ease-in-out;
  }

  &:hover {
    button {
      color: ${({ theme }) => theme.fantasia};
      transform: translateY(-0.2rem);
    }
  }

  ${mediaMaxDesktop1024`
    button {
      font-size: 1rem;
    }
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
  color: ${({ theme }) => theme.submarine};
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
    color: ${({ theme }) => theme.submarine};
    transition: color ${transitionDuration} ease-in-out;
    width: 2.4rem;
    height: 2.4rem;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.techWhite};
    }

    ${LanguageToggleText} {
      color: ${({ theme }) => theme.techWhite};
    }
  }

  ${mediaMaxDesktop1024`
    svg {
      width: 2rem;
      height: 2rem;
    }
  `}
`;

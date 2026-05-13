import { Link } from "@/i18n/navigation";
import { mediaMaxMobile } from "@/lib/media-query";
import styled, { css } from "styled-components";

const transitionDuration = "0.4s";

export const NavbarContainer = styled.nav<{ $hasScrolled: boolean }>`
  height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  padding: 0 7.5rem;
  background-color: ${({ theme }) => theme.extremeBlack};
  border-bottom: 0.1rem solid ${({ theme }) => theme.techWhite10};
  position: fixed;
  z-index: 30;

  ${mediaMaxMobile`
    padding: 0 2.4rem;
  `}
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  ${mediaMaxMobile`
    gap: 2rem;
  `}
`;

const iconButtonStyles = css`
  width: 5rem;
  height: 5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid ${({ theme }) => theme.techWhite10};
  border-radius: 100%;
  color: ${({ theme }) => theme.submarine};
  background: transparent;
  transition:
    color ${transitionDuration} ease-in-out,
    border-color ${transitionDuration} ease-in-out,
    background-color ${transitionDuration} ease-in-out;

  svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.techWhite};
  }
`;

export const HamburgerButton = styled.button<{ $isOpen: boolean }>`
  ${iconButtonStyles}
  position: relative;
  color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.fantasia : theme.submarine};
  border-color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.fantasia : theme.techWhite10};
`;

export const IconButton = styled.button`
  ${iconButtonStyles}
`;

const toggleIconStyles = css<{ $isOpen: boolean }>`
  position: absolute;
  inset: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    opacity 0.24s ease,
    transform 0.24s ease;
`;

export const MenuToggleIcon = styled.span<{ $isOpen: boolean }>`
  ${toggleIconStyles}
  opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(90deg) " : "rotate(0deg) ")};
`;

export const CloseToggleIcon = styled.span<{ $isOpen: boolean }>`
  ${toggleIconStyles}
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) =>
    $isOpen ? "rotate(0deg) " : "rotate(-90deg) "};
  color: ${({ theme }) => theme.fantasia};
`;

export const Logo = styled(Link)`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.techWhite};

  span {
    color: ${({ theme }) => theme.fantasia};
  }
`;

export const TogglesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MenuDrawer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  left: 0;
  width: 100%;
  height: calc(100% - 10rem);
  bottom: 0;
  padding: 7rem 7.5rem;
  display: flex;
  background-color: ${({ theme }) => theme.extremeBlack};
  border-right: 0.1rem solid ${({ theme }) => theme.techWhite10};
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  transition: transform ${transitionDuration} ease;
  z-index: 31;

  ${mediaMaxMobile`
    padding: 3.2rem 2.4rem;
  `}
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  ${mediaMaxMobile`
    gap: 3rem;
  `}
`;

export const MenuItem = styled.li`
  button {
    color: ${({ theme }) => theme.submarine};
    font-size: 2.6rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition:
      color ${transitionDuration} ease-in-out,
      transform ${transitionDuration} ease-in-out;
  }

  &:hover {
    button {
      color: ${({ theme }) => theme.techWhite};
      transform: translateX(0.4rem);
    }
  }
`;

import styled, { css } from "styled-components";

const transitionDuration = "0.4s";

export const NavbarContainer = styled.nav<{ $hasScrolled: boolean }>`
  height: 7rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  padding: 0 2rem;
  background-color: ${({ $hasScrolled }) =>
    $hasScrolled
      ? "var(--color-background-secondary)"
      : "var(--color-background-primary)"};
  position: fixed;
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

const iconButtonStyles = css`
  width: 4.2rem;
  height: 4.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid var(--color-borders);
  border-radius: 100%;
  color: ${({ theme }) => theme.textSecondary};
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
    color: ${({ theme }) => theme.textPrimary};
  }
`;

export const HamburgerButton = styled.button<{ $isOpen: boolean }>`
  ${iconButtonStyles}
  position: relative;
  color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.primary : theme.textSecondary};
  border-color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.primary : theme.borders};
  background-color: ${({ $isOpen, theme }) =>
    $isOpen ? `${theme.primary}10` : "transparent"};
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
  color: ${({ theme }) => theme.primary};
`;

export const Logo = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};

  span {
    color: ${({ theme }) => theme.primary};
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
  height: calc(100% - 7rem);
  bottom: 0;
  padding: 2.4rem 2rem 3.2rem;
  display: flex;
  background-color: var(--color-background-secondary);
  border-right: 0.1rem solid var(--color-borders);
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  transition: transform ${transitionDuration} ease;
  z-index: 10;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const MenuItem = styled.li`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition:
    color ${transitionDuration} ease-in-out,
    transform ${transitionDuration} ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
    transform: translateX(0.4rem);
  }
`;

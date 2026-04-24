import styled, { css } from "styled-components";

const transitionDuration = "0.4s";

export const NavbarContainer = styled.nav`
  height: 7rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  padding: 0 2rem;
  background-color: var(--color-background-secondary);
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
  border: 1px solid var(--color-borders);
  border-radius: 999px;
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
    border-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => `${theme.primary}10`};
  }
`;

export const HamburgerButton = styled.button`
  ${iconButtonStyles}
`;

export const IconButton = styled.button`
  ${iconButtonStyles}
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

export const MenuOverlay = styled.button<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  border: 0;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  background: rgba(0, 0, 0, 0.45);
  transition: opacity ${transitionDuration} ease-in-out;
  z-index: 19;
`;

export const MenuDrawer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: min(30rem, 82vw);
  height: 100dvh;
  padding: 2.4rem 2rem 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  background-color: var(--color-background-secondary);
  border-right: 1px solid var(--color-borders);
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  transition: transform ${transitionDuration} ease-in-out;
  z-index: 20;
`;

export const DrawerHeader = styled.div`
  padding-top: 0.4rem;
`;

export const DrawerLogo = styled(Logo)`
  font-size: 1.8rem;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const MenuItem = styled.li`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.4rem;
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

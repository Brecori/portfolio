import styled from "styled-components";

export const NavbarContainer = styled.nav<{ $hasScrolled: boolean }>`
  height: 8rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${({ $hasScrolled }) =>
    $hasScrolled
      ? "var(--color-background-secondary)"
      : "var(--color-background-primary)"};
`;

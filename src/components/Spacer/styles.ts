import styled from "styled-components";

export const Spacer = styled.div`
  width: 100%;
  height: 0.1rem;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${({ theme }) => theme.borders} 50%,
    transparent 100%
  );
`;

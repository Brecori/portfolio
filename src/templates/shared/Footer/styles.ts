import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  min-height: 8rem;
  padding: 0 15rem;
  border-top: 0.1rem solid ${({ theme }) => theme.techWhite10};

  ${mediaMaxDesktop1024`
    padding: 0 7.5rem;
  `}

  ${mediaMaxMobile`
    min-height: 7.2rem;
    padding: 1.8rem 2.4rem;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 1rem;
  `}
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.submarine};
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;

  ${mediaMaxDesktop1024`
    font-size: 1rem;
  `}

  ${mediaMaxMobile`
    font-size: 1.2rem;
    text-align: center;
  `}
`;

export const Logo = styled.div`
  justify-self: end;
  font-size: 2.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.submarine};
  pointer-events: none;

  ${mediaMaxDesktop1024`
    font-size: 1.6rem;
  `}
`;

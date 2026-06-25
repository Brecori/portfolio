import AnimatedContent from "@/components/AnimatedContent";
import {
  mediaMaxDesktop1024,
  mediaMaxIpadVertical,
  mediaMaxMobile,
} from "@/lib/media-query";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ContactSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 15rem;

  ${mediaMaxDesktop1024`
    padding: 10rem 7.5rem;
  `}

  ${mediaMaxMobile`
    min-height: auto;
    padding: 8rem 2.4rem 10rem;
  `}
`;

export const ContactInner = styled(AnimatedContent)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  width: 100%;
  max-width: 112rem;
  text-align: center;

  ${mediaMaxMobile`
    gap: 2rem;
  `}
`;

export const ContactEyebrow = styled.span`
  color: ${theme.fantasia};
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.8em;
  line-height: 1;
  text-indent: 0.8em;
  text-transform: uppercase;
`;

export const ContactTitle = styled.h2`
  color: ${theme.techWhite};
  font-size: 14rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 0.92;
  text-transform: uppercase;
  font-family: var(--font-neue);

  ${mediaMaxMobile`
    font-size: 8rem;
    line-height: 0.98;
  `}
`;

export const ContactList = styled(AnimatedContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.4rem;
  margin: 1.6rem 0 0;
  padding: 0;
  list-style: none;

  ${mediaMaxIpadVertical`
    gap: 4rem;
    margin-top: 3rem;
  `}

  ${mediaMaxMobile`
    width: 100%;
    gap: 4.5rem;
  `}
`;

export const ContactItem = styled.div`
  display: flex;
`;

import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: var(--font-inter);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: ${theme.extremeBlack};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.fantasia};
    border-radius: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${theme.extremeBlack};
  }

  html, body, #__next {
    height: 100%;
    background-color: ${theme.darkBlack};
    scrollbar-color: ${theme.fantasia} ${theme.extremeBlack};
  }

  body {
    position: relative;
    overflow-x: hidden;
  }


  .app-shell {
    position: relative;
    z-index: 1;
  }

  html {
    font-size: calc(100vw / 1920 * 10);
    text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;

    ${mediaMaxDesktop1024`
      font-size: calc(100vw / 1024 * 10);
    `}

    ${mediaMaxMobile`
      font-size: calc(100vw / 599 * 10);
    `}
  }

  #smooth-wrapper {
    overflow: hidden;
  }

  #smooth-content {
    min-height: 100%;
    will-change: transform;
  }

  li {
    list-style-type: none;
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  input, textarea {
    appearance: none;
    border: none;
    outline: none;
  }

  @media (pointer: fine) {
    html:not([data-native-cursor="true"]),
    html:not([data-native-cursor="true"]) body,
    html:not([data-native-cursor="true"]) a,
    html:not([data-native-cursor="true"]) button,
    html:not([data-native-cursor="true"]) input,
    html:not([data-native-cursor="true"]) textarea,
    html:not([data-native-cursor="true"]) [role="button"] {
      cursor: none !important;
    }
  }

`;

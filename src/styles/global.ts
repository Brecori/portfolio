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
    color: ${theme.fantasia};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
  }

  html, body, #__next {
    height: 100%;
    background-color: ${theme.extremeBlack};
    transition: background-color 0.4s ease-in-out;
  }

  body {
    position: relative;
    overflow-x: hidden;
  }

  body::before {
    content: "";
    position: fixed;
    inset: -50%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.055;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.15' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
    background-repeat: repeat;
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

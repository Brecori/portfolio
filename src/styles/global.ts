import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: var(--font-inter);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --color-featured: #00F0FF;
    --color-background-primary: #101010;
    --color-background-secondary: #0b0b0b;
    --color-text-primary: #f5f5f5;
    --color-text-secondary: #b9cacb;
    --color-borders: #f5f5f510;
  }

  [data-theme="light"] {
    --color-featured: #2e3141;
    --color-background-primary: #f5f5f5;
    --color-background-secondary: #fff;
    --color-text-primary: #101010;
    --color-text-secondary: #494551;
    --color-borders: #10101010;
  }

  ::-webkit-scrollbar {
    width: 5px;
    color: ${theme.primary};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
  }

  html, body, #__next {
    height: 100%;
    overflow: hidden !important;
    background-color: ${theme.background};
  }

  html {
    font-size: calc(100vw / 1920 * 10);
    text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;

    @media (max-width: 1024px) {
      font-size: calc(100vw / 1024 * 10);
    }

    @media (max-width: 599px) {
      font-size: calc(100vw / 599 * 10);
    }
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
`;

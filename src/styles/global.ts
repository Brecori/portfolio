import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: var(--gotham);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --color-primary: #6366F1;
    --color-background-primary: #020617;
    --color-background-secondary: #0F172A;
    --color-text-primary: #f8fafc;
    --color-text-secondary: #94a3b8;
    --color-borders: #1e293b;
  }

  [data-theme="light"] {
    --color-primary: #4f46e5;
    --color-background-primary: #f8fafc;
    --color-background-secondary: #fff;
    --color-text-primary: #0F172A;
    --color-text-secondary: #64748B;
    --color-borders: #e2e8f0;
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

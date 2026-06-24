import "styled-components";

export const theme = {
  fantasia: "#A855F7",
  extremeBlack: "#101010",
  codGray: "#0b0b0b",
  techWhite: "#f5f5f5",
  submarine: "#b9cacb",
  techWhite10: "#f5f5f510",
  techWhite50: "#f5f5f550",
  darkBlack: "#020202",
};

// get the color name in https://www.color-name.com

export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}

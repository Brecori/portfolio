import "styled-components";

export const theme = {
  fantasia: "#A855F7",
  extremeBlack: "#101010",
  codGray: "#0b0b0b",
  techWhite: "#f5f5f5",
  submarine: "#b9cacb",
  techWhite10: "#f5f5f510",
};

// get the color name in https://www.color-name.com

export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme {
    fantasia: Theme["fantasia"];
    extremeBlack: Theme["extremeBlack"];
    codGray: Theme["codGray"];
    techWhite: Theme["techWhite"];
    submarine: Theme["submarine"];
    techWhite10: Theme["techWhite10"];
  }
}

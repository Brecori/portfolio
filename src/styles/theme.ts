import "styled-components";

export const theme = {
  primary: "var(--color-primary)",
  background: "var(--color-background-primary)",
  backgroundSecondary: "var(--color-background-secondary)",
  textPrimary: "var(--color-text-primary)",
  textSecondary: "var(--color-text-secondary)",
  borders: "var(--color-borders)",
};

// get the color name in https://www.color-name.com

export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Styled component use extends, so is okay to be empty
  export interface DefaultTheme extends Theme {}
}

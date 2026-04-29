"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

type AppThemeProviderProps = {
  children: ReactNode;
};

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

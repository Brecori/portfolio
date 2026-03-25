"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { ThemeContextType, ThemeMode } from "./props";

const DEFAULT_STATE = {
  mode: "dark" as const,
  toggleTheme: () => {},
  setTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(DEFAULT_STATE);

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const stored = localStorage.getItem("theme") as ThemeMode | null;

    if (stored) {
      document.documentElement.dataset.theme = stored;
      return stored;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const systemTheme = prefersDark ? "dark" : "light";

    document.documentElement.dataset.theme = systemTheme;
    return systemTheme;
  });

  const setTheme = (newTheme: ThemeMode) => {
    setMode(newTheme);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    const next = mode === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { ThemeContextType, ThemeMode } from "./props";

const DEFAULT_STATE = {
  mode: "dark" as const,
  toggleTheme: () => {},
  setTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(DEFAULT_STATE);

const getPreferredTheme = (): ThemeMode => {
  const stored = localStorage.getItem("theme") as ThemeMode | null;

  if (stored) {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

type AppThemeProviderProps = {
  children: ReactNode;
  initialMode?: ThemeMode;
};

export const AppThemeProvider = ({
  children,
  initialMode = "dark",
}: AppThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(initialMode);

  useEffect(() => {
    setMode((currentMode) => {
      const preferredTheme = getPreferredTheme();
      return preferredTheme === currentMode ? currentMode : preferredTheme;
    });
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem("theme", mode);
    document.cookie = `theme=${mode}; path=/; max-age=31536000; samesite=lax`;
  }, [mode]);

  const setTheme = (newTheme: ThemeMode) => {
    setMode(newTheme);
  };

  const toggleTheme = () => {
    setMode((currentMode) => (currentMode === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

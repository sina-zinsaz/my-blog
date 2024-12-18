"use client";

import { useState, useEffect, useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import DarkModeSwitch from "./hooks/DarkModeSwitch";
import { darkTheme, lightTheme } from "./theme/theme";
import "./styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) setIsDarkMode(savedMode === "true");
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DarkModeSwitch
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

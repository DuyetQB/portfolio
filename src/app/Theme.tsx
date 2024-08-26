"use client"
import React, { useState, useLayoutEffect, PropsWithChildren } from "react";

export const ThemeContext = React.createContext({
  dark: false,
  toggle: () => {}
});

export default function ThemeProvider({ children } : PropsWithChildren) {
  // keeps state of the current theme
  const prefersDark = global?.window && window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [dark, setDark] = useState(prefersDark);

  // paints the app before it renders elements
  useLayoutEffect(() => {
    // Media Hook to check what theme user prefers
    applyTheme();
    // if state changes, repaints the app
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dark]);

  // rewrites set of css variablels/colors
  const applyTheme = () => {
    let theme:any;
    if (dark) {
      theme = darkTheme;
    }
    if (!dark) {
      theme = lightTheme;
    }

    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };

  const toggle = () => {
    console.log("Toggle Method Called");

    // A smooth transition on theme switch
    const body = document.getElementsByTagName("body")[0];
    body.style.cssText = "transition: background .5s ease";

    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// styles
const lightTheme = [
    "--foreground-rgb: 0, 0, 0",
    "--background-start-rgb: 214, 219, 220",
    "--background-end-rgb: 255, 255, 255"
];

const darkTheme = [
    "--foreground-rgb: 255, 255, 255",
    "--background-start-rgb: 0, 0, 0",
    "--background-end-rgb: 0, 0, 0"
];

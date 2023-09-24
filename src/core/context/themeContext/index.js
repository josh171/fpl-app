import React, { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { themes } from "./components/FplThemes";

// Create a context for the theme
const ThemeContext = createContext();

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Function to load the theme from localStorage
const loadThemeFromLocalStorage = () => {
  const storedTheme = localStorage.getItem("user_theme");
  return storedTheme ? themes[storedTheme] : themes.theme_one; // Default to theme1 if not found
};

// ThemeProvider component to wrap your app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(loadThemeFromLocalStorage());

  // Function to change the theme
  const changeTheme = (themeName) => {
    const newTheme = themes[themeName];
    setTheme(newTheme);
    localStorage.setItem("user_theme", themeName);
  };

  // Update localStorage when the component unmounts
  useEffect(() => {
    return () => {
      localStorage.setItem("user_theme", theme);
    };
  }, [theme]);

  return (
    <MuiThemeProvider theme={{}}>
      <ThemeContext.Provider value={{ changeTheme }}>
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
};

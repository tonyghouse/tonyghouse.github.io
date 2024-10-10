import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import {ThemeMode} from "../util/ThemeUtil";

const ThemeContextDefaultProvider = (props: any) => {
  const [userThemeMode, setUserThemeMode] = useState<ThemeMode>("dark");

  useEffect(() => {
    let userColorScheme: ThemeMode = "dark";

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        userColorScheme = event.matches ? "dark" : "light";
      });

     const themeValue= localStorage.getItem('tonyghouseThemeValue');
     const colorScheme: ThemeMode = (themeValue === "dark" || themeValue === "light") 
                        ?  themeValue : userColorScheme;
                        
   localStorage.setItem('tonyghouseThemeValue', colorScheme);
    setUserThemeMode(colorScheme);
  }, []);

  useEffect(() => {
    //shadcn theme changing
    if (userThemeMode === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    
    toggleCSSVariables();
  }, [userThemeMode]);

  const lightThemeCSSVariables = [
    {
      name: "--custom-background-color",
      value: "#fdfdfd",
    },
    {
      name: "--custom-first-heading-color",
      value: "#141212",
    },
    
    {
      name: "--custom-header-lines-color",
      value: "#4b4f58",
    },
    {
      name: "--custom-second-heading-color",
      value: "#7a7f90",
    },
  ];

  const darkThemeCSSVariables = [
    {
      name: "--custom-background-color",
      value: "#030202",
    },
    {
      name: "--custom-first-heading-color",
      value: "#c7d2f5",
    },
    
    {
      name: "--custom-header-lines-color",
      value: "#545a65",
    },
    {
      name: "--custom-second-heading-color",
      value: "#d0d0d0",
    },
  ];

  const toggleUserThemeMode = () => {
    let toggledThemeMode: ThemeMode = userThemeMode === "dark" ? "light" : "dark";
    localStorage.setItem('tonyghouseThemeValue', toggledThemeMode);
    setUserThemeMode(toggledThemeMode);
  };

  const toggleCSSVariables = () => {
    const themeCSSVariables =
      userThemeMode === "light"
        ? lightThemeCSSVariables
        : darkThemeCSSVariables;
        
    themeCSSVariables.forEach((cssVar) => {
      document.documentElement.style.setProperty(cssVar.name, cssVar.value);
    });
  };

  return (
    <>
      <ThemeContext.Provider value={{
      themeMode:userThemeMode,
      toggleThemeMode: toggleUserThemeMode,
      }}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeContextDefaultProvider;

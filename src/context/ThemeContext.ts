import { createContext } from "react";
import { ThemeMode } from "../util/ThemeUtil";

export interface IThemeContextType{
    themeMode: ThemeMode;
    toggleThemeMode(): void;
}

export const defaultThemeContextType : IThemeContextType = {
    themeMode: "light",
    toggleThemeMode: ()=>{}
}

export const ThemeContext = createContext<IThemeContextType>(defaultThemeContextType);

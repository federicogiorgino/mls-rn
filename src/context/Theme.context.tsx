import { ExtendedTheme } from "@react-navigation/native";
import React, { useState, createContext, FC } from "react";
import { CustomDarkTheme, CustomDefaultTheme } from "../theme/index";

type ThemeContextState = {
  isDarkTheme: boolean;
  theme: ExtendedTheme;
  switchTheme: () => void;
};

const contextDefaultValue: ThemeContextState = {
  isDarkTheme: true,
  theme: CustomDarkTheme,
  switchTheme: () => {},
};

export const ThemeContext =
  createContext<ThemeContextState>(contextDefaultValue);

export const ThemeContextProvider: FC = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    contextDefaultValue.isDarkTheme
  );

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const switchTheme = () => {
    setIsDarkTheme((isDarkTheme) => !isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

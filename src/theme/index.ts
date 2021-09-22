import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import {
  DarkTheme,
  DefaultTheme,
  ExtendedTheme,
} from "@react-navigation/native";

export const CustomDefaultTheme: ExtendedTheme = {
  ...DefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: "#FFFFFF",
    text: "#333333",
    primary: "#0EAD69",
    surface: "#E1E1E1",
  },
};

export const CustomDarkTheme: ExtendedTheme = {
  ...DarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: "#090909",
    text: "#f5f5f5",
    primary: "#0EAD69",
  },
};

import React, { FC, useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

import { AuthStack } from "./Auth.stack";

import { ThemeContext } from "../context/Theme.context";

export const Routes: FC = () => {
  const { theme, isDarkTheme } = useContext(ThemeContext);

  return (
    <>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <AuthStack />
        </NavigationContainer>
      </PaperProvider>
      <ExpoStatusBar style={isDarkTheme ? "light" : "dark"} />
    </>
  );
};

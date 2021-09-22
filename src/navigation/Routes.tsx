import React, { FC, useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

import { AuthStack } from "./Auth.stack";

import { ThemeContext } from "../context/Theme.context";
import { AuthContext } from "../context/Auth.context";

import { MeContextProvider } from "../context/Me.context";
import { AdminContextProvider } from "../context/Admin.context";

import { MainStack } from "./Main.stack";

export const Routes: FC = () => {
  const { token } = useContext(AuthContext);
  const { theme, isDarkTheme } = useContext(ThemeContext);

  return (
    <>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          {!token ? (
            <AuthStack />
          ) : (
            <MeContextProvider>
              <AdminContextProvider>
                <MainStack />
              </AdminContextProvider>
            </MeContextProvider>
          )}
        </NavigationContainer>
      </PaperProvider>
      <ExpoStatusBar style={isDarkTheme ? "light" : "dark"} />
    </>
  );
};

import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import WelcomeScreen from "../screens/Auth/WelcomeScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";

export type AuthStackParams = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

export type AuthStackNavProps<T extends keyof AuthStackParams> = {
  navigation: StackNavigationProp<AuthStackParams, T>;
  route: RouteProp<AuthStackParams, T>;
};

const Stack = createStackNavigator<AuthStackParams>();

interface AuthStackProps {}

export const AuthStack: FC<AuthStackProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

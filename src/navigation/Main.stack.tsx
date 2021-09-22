import React, { FC, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import CreatePostScreen from "../screens/Main/CreatePostScreen";
import PostDetailsScreen from "../screens/Main/PostDetailsScreen";
import HomeScreen from "../screens/Main/HomeScreen";
import AdminScreen from "../screens/Admin/AdminScreen";

import { MeContext } from "../context/Me.context";

export type MainStackParams = {
  HomeScreen: undefined;
  CreatePostScreen: undefined;
  PostDetailsScreen: { id: string };
  AdminScreen: undefined;
};

export type MainStackNavProps<T extends keyof MainStackParams> = {
  navigation: StackNavigationProp<MainStackParams, T>;
  route: RouteProp<MainStackParams, T>;
};

const Stack = createStackNavigator<MainStackParams>();

interface MainStackProps {}

export const MainStack: FC<MainStackProps> = () => {
  const { me } = useContext(MeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PostDetailsScreen" component={PostDetailsScreen} />
      <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
      {me?.admin && <Stack.Screen name="AdminScreen" component={AdminScreen} />}
    </Stack.Navigator>
  );
};

import React, { FC, useContext } from "react";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import HomeScreen from "../screens/Main/HomeScreen";
import AdminScreen from "../screens/Admin/AdminScreen";
import MyProfileScreen from "../screens/Main/MyProfileScreen";
// import SearchScreen from "../screens/Main/SearchScreen";

import { MeContext } from "../context/Me.context";
import { useTheme } from "@react-navigation/native";

export type MainTabsParams = {
  HomeScreen: undefined;
  AdminScreen: undefined;
  SearchScreen: undefined;
  MyProfileScreen: undefined;
};

export type MainTabsNavProps<T extends keyof MainTabsParams> = {
  navigation: BottomTabNavigationProp<MainTabsParams, T>;
  route: RouteProp<MainTabsParams, T>;
};

const Tabs = createBottomTabNavigator<MainTabsParams>();

interface MainTabsProps {}

export const MainTabs: FC<MainTabsProps> = () => {
  const { me } = useContext(MeContext);

  const { colors } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.background,
        },
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={30} color={color} />
          ),
        }}
      />
      {me?.admin && (
        <Tabs.Screen
          name="AdminScreen"
          component={AdminScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="thumbs-up-down"
                size={24}
                color={color}
              />
            ),
          }}
        />
      )}
      {/* <Tabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search" size={24} color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={30} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

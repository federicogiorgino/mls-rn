import React, { FC } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/Shared/DrawerContent";

import { MainStack } from "./Main.stack";

const Drawer = createDrawerNavigator();

interface MainDrawerProps {}

export const MainDrawer: FC<MainDrawerProps> = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="MainStack" component={MainStack} />
    </Drawer.Navigator>
  );
};

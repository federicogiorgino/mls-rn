import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import SafeArea from "../../../components/Layout/SafeArea";
import { MainStackNavProps } from "../../../navigation/Main.stack";

import { styles } from "./styles";

const ProfileScreen = ({
  route,
  navigation,
}: MainStackNavProps<"ProfileScreen">) => {
  const { id } = route.params;

  return (
    <SafeArea>
      <Text>{id}lol</Text>
    </SafeArea>
  );
};

export default ProfileScreen;

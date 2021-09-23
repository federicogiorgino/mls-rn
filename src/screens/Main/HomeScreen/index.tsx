import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button } from "react-native";
import SafeArea from "../../../components/Layout/SafeArea";

import { styles } from "./styles";

const HomeScreen = () => {
  const navigation: any = useNavigation();

  return (
    <SafeArea>
      <Button
        title="Create Post"
        onPress={() => navigation.push("CreatePostScreen")}
      />
    </SafeArea>
  );
};

export default HomeScreen;

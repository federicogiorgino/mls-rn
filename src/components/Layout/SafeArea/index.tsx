import React, { FC, ReactNode } from "react";
import { SafeAreaView } from "react-native";

import { styles } from "./styles";

interface SafeAreaProps {
  children: ReactNode;
}
const SafeArea: FC<SafeAreaProps> = ({ children }) => {
  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
};

export default SafeArea;

import React, { FC } from "react";
import { View, Text } from "react-native";

interface SpacerProps {
  y?: number;
  x?: number;
}

const Spacer: FC<SpacerProps> = ({ x = 0, y = 0 }) => {
  return <View style={{ height: y, width: x }} />;
};

export default Spacer;

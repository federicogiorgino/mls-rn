import React, { FC, ReactNode } from "react";
import { View } from "react-native";

import { styles } from "./styles";

interface CenteredPageProps {
  children: ReactNode;
}

const CenteredPage: FC<CenteredPageProps> = ({ children }) => {
  return <View style={styles.centeredPage}>{children}</View>;
};

export default CenteredPage;

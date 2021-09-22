import React, { FC, ReactNode } from "react";
import { View } from "react-native";

import { styles } from "./styles";

interface PageProps {
  children: ReactNode;
}

const Page: FC<PageProps> = ({ children }) => {
  return <View style={styles.page}>{children}</View>;
};

export default Page;

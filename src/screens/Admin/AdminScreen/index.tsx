import { useTheme } from "@react-navigation/native";
import React, { FC, useContext, useEffect } from "react";
import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicatorBase,
} from "react-native";
import { Text } from "react-native-paper";
import CenteredPage from "../../../components/Layout/CenteredPage";
import SafeArea from "../../../components/Layout/SafeArea";
import { AdminContext } from "../../../context/Admin.context";

import { styles } from "./styles";

const AdminScreen: FC = () => {
  const { colors } = useTheme();
  const { loading, error, unmoderatedPosts, getUnmoderatedPosts } =
    useContext(AdminContext);

  useEffect(() => {
    getUnmoderatedPosts();
  }, []);

  // if (unmoderatedPosts.length  0) {
  //   return (
  //     <SafeArea>
  //       <CenteredPage>
  //         <ActivityIndicatorBase color={colors.primary} size="large" />
  //       </CenteredPage>
  //     </SafeArea>
  //   );
  // }
  return (
    <SafeArea>
      <FlatList
        refreshControl={
          <RefreshControl
            tintColor={colors.primary}
            refreshing={loading}
            onRefresh={() => {
              getUnmoderatedPosts();
            }}
          />
        }
        data={unmoderatedPosts}
        renderItem={({ item }) => (
          <View>
            <Text>{item?.text!}</Text>
          </View>
        )}
        keyExtractor={(item) => item?._id.toString()!}
      />
    </SafeArea>
  );
};

export default AdminScreen;

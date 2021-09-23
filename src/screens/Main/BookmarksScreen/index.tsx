import React, { useContext } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { useTheme } from "@react-navigation/native";

import CenteredPage from "../../../components/Layout/CenteredPage";
import SafeArea from "../../../components/Layout/SafeArea";
import PostCard from "../../../components/Main/PostCard";

import { MeContext } from "../../../context/Me.context";
import { MainStackNavProps } from "../../../navigation/Main.stack";

import { styles } from "./styles";

const BookmarksScreen = ({ navigation }: MainStackNavProps<"MainTabs">) => {
  const { colors } = useTheme();
  const { myLikes, getMyLikes, loading } = useContext(MeContext);

  if (!myLikes) {
    return (
      <SafeArea>
        <CenteredPage>
          <ActivityIndicator color={colors.primary} size="large" />
        </CenteredPage>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <FlatList
        refreshControl={
          <RefreshControl
            tintColor={colors.primary}
            refreshing={loading}
            onRefresh={() => {
              getMyLikes();
            }}
          />
        }
        data={myLikes}
        keyExtractor={(item) => item?._id!}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.push("PostDetailsScreen", { id: item?._id! })
            }
          >
            <PostCard post={item} showButtons={false} />
          </TouchableOpacity>
        )}
      />
    </SafeArea>
  );
};

export default BookmarksScreen;

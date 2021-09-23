import React, { FC, useContext } from "react";
import {
  ActivityIndicator,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import SafeArea from "../../../components/Layout/SafeArea";

import { AuthContext } from "../../../context/Auth.context";
import { MeContext } from "../../../context/Me.context";

import { styles } from "./styles";
import CenteredPage from "../../../components/Layout/CenteredPage";
import { MainStackNavProps } from "../../../navigation/Main.stack";
import PostCard from "../../../components/Main/PostCard";

const MyProfileScreen = ({ navigation }: MainStackNavProps<"MainTabs">) => {
  const { colors } = useTheme();
  const { logout } = useContext(AuthContext);
  const { loading, me, myPosts, getMe, getMyPosts } = useContext(MeContext);

  if (!me || !myPosts) {
    return (
      <SafeArea>
        <CenteredPage>
          <ActivityIndicator size="large" color="red" />
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
              getMe();
              getMyPosts();
            }}
          />
        }
        ListHeaderComponent={
          <View style={styles.userInfoPanel}>
            <TouchableOpacity
              style={styles.logoutIcon}
              onPress={() => logout()}
            >
              <AntDesign name="logout" size={24} color="red" />
            </TouchableOpacity>
            <Image source={{ uri: me?.image }} style={styles.profilePic} />
            <Text style={styles.usernameText}>{me?.username}</Text>

            <View style={styles.userInfoPanelCardContainer}>
              <View
                style={[
                  styles.followerCard,
                  { backgroundColor: colors.surface },
                ]}
              >
                <Text style={styles.followerCardLabel}>Followers</Text>
                <Text style={styles.followerCardValue}>
                  {me.followers.length}
                </Text>
              </View>

              <View
                style={[
                  styles.followerCard,
                  { backgroundColor: colors.surface },
                ]}
              >
                <Text style={styles.followerCardLabel}>Following</Text>
                <Text style={styles.followerCardValue}>
                  {me.following.length}
                </Text>
              </View>
            </View>
          </View>
        }
        data={myPosts}
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

export default MyProfileScreen;

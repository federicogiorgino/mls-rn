import React, { FC, useContext } from "react";
import {
  ActivityIndicator,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import SafeArea from "../../../components/Layout/SafeArea";

import { AuthContext } from "../../../context/Auth.context";
import { MeContext } from "../../../context/Me.context";

import { styles } from "./styles";
import CenteredPage from "../../../components/Layout/CenteredPage";
import { MainTabsNavProps } from "../../../navigation/Main.tabs";
import { MainStackNavProps } from "../../../navigation/Main.stack";

const MyProfileScreen = ({ navigation }: MainStackNavProps<"MainTabs">) => {
  const { colors } = useTheme();
  const { logout } = useContext(AuthContext);
  const { loading, me, myPosts, getMe, getMyPosts } = useContext(MeContext);

  if (!me || !myPosts || loading) {
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
      <View style={styles.userInfoPanel}>
        <TouchableOpacity
          style={{ position: "absolute", top: 30, left: 30 }}
          onPress={() => {
            getMe();
            getMyPosts();
          }}
        >
          <AntDesign name="reload1" size={24} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ position: "absolute", top: 30, right: 30 }}
          onPress={() => logout()}
        >
          <AntDesign name="logout" size={24} color="red" />
        </TouchableOpacity>
        <Image source={{ uri: me?.image }} style={styles.profilePic} />
        <Text style={styles.usernameText}>{me?.username}</Text>

        <View style={styles.userInfoPanelCardContainer}>
          <View
            style={[styles.followerCard, { backgroundColor: colors.surface }]}
          >
            <Text style={styles.followerCardLabel}>Followers</Text>
            <Text style={styles.followerCardValue}>{me.followers.length}</Text>
          </View>

          <View
            style={[styles.followerCard, { backgroundColor: colors.surface }]}
          >
            <Text style={styles.followerCardLabel}>Following</Text>
            <Text style={styles.followerCardValue}>{me.following.length}</Text>
          </View>
        </View>
        <FlatList
          data={myPosts}
          keyExtractor={(item) => item?._id!}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PostDetailsScreen", { id: item?._id! })
              }
              style={{
                margin: 10,
                backgroundColor: colors.surface,
                padding: 10,
              }}
            >
              <Text>{item?.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeArea>
  );
};

export default MyProfileScreen;

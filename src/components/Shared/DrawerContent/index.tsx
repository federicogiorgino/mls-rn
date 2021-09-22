import React, { useContext, FC, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItem,
  useDrawerStatus,
} from "@react-navigation/drawer";
import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";

import { AuthContext } from "../../../context/Auth.context";
import { ThemeContext } from "../../../context/Theme.context";

import { styles } from "./styles";
import { MeContext } from "../../../context/Me.context";

interface Props {}

const DrawerContent: FC<Props> = (props) => {
  const isDrawerOpen = useDrawerStatus() === "open";
  const { logout } = useContext(AuthContext);
  const { isDarkTheme, switchTheme } = useContext(ThemeContext);

  const navigation: any = useNavigation();

  const {
    me,
    loading,
    error,
    getMyFollowing,
    getMyFollowers,
    myFollowing,
    myFollowers,
  } = useContext(MeContext);

  useEffect(() => {
    getMyFollowing(me?._id!);
  }, [isDrawerOpen]);

  useEffect(() => {
    getMyFollowers(me?._id!);
  }, [isDrawerOpen]);

  // if (loading) return <View style={{ flex: 1, backgroundColor: "red" }} />;

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProfileScreen", { id: me?._id! });
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 15,
                  alignItems: "center",
                }}
              >
                <Avatar.Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
                  }}
                  size={50}
                />

                <Title style={styles.title}>{me?.username}</Title>
              </View>
            </TouchableOpacity>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.section}
                onPress={() => {
                  navigation.navigate("UserFollowersScreen");
                }}
              >
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  {myFollowers}
                </Paragraph>
                <Caption style={styles.caption}> Followers</Caption>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.section}
                onPress={() => {
                  navigation.navigate("UserFollowingScreen");
                }}
              >
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  {myFollowing}
                </Paragraph>
                <Caption style={styles.caption}> Following</Caption>
              </TouchableOpacity>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Entypo name="home" size={size} color={color} />
              )}
              label="Home"
              onPress={() => {
                navigation.navigate("HomeScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Entypo name="user" size={size} color={color} />
              )}
              label="Profile"
              onPress={() => {
                navigation.navigate("ProfileScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Entypo name="bookmarks" size={size} color={color} />
              )}
              label="Bookmarks"
              onPress={() => {
                navigation.navigate("BookmarksScreen");
              }}
            />
            {me?.admin && (
              <DrawerItem
                icon={({ color, size }) => (
                  <MaterialIcons
                    name="admin-panel-settings"
                    size={size}
                    color={color}
                  />
                )}
                label="Admin"
                onPress={() => {
                  navigation.navigate("AdminScreen");
                }}
              />
            )}
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                switchTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <FontAwesome name="sign-out" size={24} color={color} />
          )}
          label="Sign Out"
          onPress={() => {
            logout();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

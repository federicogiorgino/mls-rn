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
import { Entypo, FontAwesome } from "@expo/vector-icons";

import { AuthContext } from "../../../context/Auth.context";
import { ThemeContext } from "../../../context/Theme.context";

import { styles } from "./styles";

interface Props {}

const DrawerContent: FC<Props> = (props) => {
  const navigation: any = useNavigation();
  const isDrawerOpen = useDrawerStatus() === "open";

  const { logout } = useContext(AuthContext);
  const { isDarkTheme, switchTheme } = useContext(ThemeContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
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

              <Title style={styles.title}>Federico Giorgino </Title>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.section}
                onPress={() => {
                  navigation.navigate("UserFollowersScreen");
                }}
              >
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  1{" "}
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.section}
                onPress={() => {
                  navigation.navigate("UserFollowingScreen");
                }}
              >
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  323
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </TouchableOpacity>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Entypo name="home" size={24} color={color} />
              )}
              label="Home"
              onPress={() => {
                navigation.navigate("HomeScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Entypo name="user" size={24} color={color} />
              )}
              label="Profile"
              onPress={() => {
                navigation.navigate("UserProfileScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Entypo name="bookmarks" size={24} color={color} />
              )}
              label="Bookmarks"
              onPress={() => {
                navigation.navigate("UserBookmarksScreen");
              }}
            />
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

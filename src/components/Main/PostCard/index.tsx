import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { useNavigation, useTheme } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";

import Spacer from "../../Layout/Spacer";
import BookmarkButton from "../BookmarkButton";
import { Post } from "../../../@types/post";

import { styles } from "./styles";

interface IPostCardProps {
  post: Post;
  showCommentCount?: boolean;
  showButtons?: boolean;
}

const PostCard: FC<IPostCardProps> = ({
  post,
  showCommentCount = true,
  showButtons = true,
}) => {
  const { colors } = useTheme();
  const navigation = useNavigation<any>();
  return (
    <View style={[styles.card, { backgroundColor: colors.surface }]}>
      <View style={styles.topRow}>
        <View style={styles.userInfosContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.push("ProfileScreen", { id: post?.user._id })
            }
          >
            <Avatar.Image source={{ uri: post?.user.image }} size={55} />
          </TouchableOpacity>
          <View style={styles.userTextInfoContainer}>
            <Text style={styles.username}>{post?.user.username}</Text>
            <Text>{moment(post?.createdAt).format("lll")}</Text>
          </View>
        </View>
        {showCommentCount && (
          <View style={styles.commentWrapper}>
            <MaterialCommunityIcons
              name="comment-text-multiple"
              size={22}
              color={colors.text}
            />
            <Text style={{ fontSize: 18, marginLeft: 10 }}>
              {post?.comments.length}
            </Text>
          </View>
        )}
      </View>
      <Spacer y={15} />
      <Text style={styles.text}>{post?.text}</Text>
      <Spacer y={15} />

      {showButtons && (
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 3 }}>
            {/* <AgreesButton agrees={post.agrees} id={post._id} /> */}
            <Spacer y={10} />
            {/* <DeserveButton deserves={post.deserves} id={post._id} /> */}
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BookmarkButton id={post?._id!} likes={post?.likes!} />
          </View>
        </View>
      )}
    </View>
  );
};

export default PostCard;

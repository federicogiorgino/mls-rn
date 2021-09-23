import React, { FC, useState, useEffect, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import api from "../../../api";
import { MeContext } from "../../../context/Me.context";

import { styles } from "./styles";

interface IBookmarkButtonProps {
  likes: string[];
  id: string;
}

const BookmarkButton: FC<IBookmarkButtonProps> = ({ likes, id }) => {
  const { me, myLikes, getMyLikes } = useContext(MeContext);
  const { colors } = useTheme();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (likes.find((like) => like === me?._id)) {
      setLiked(true);
    } else setLiked(false);
  }, [likes]);

  const likePost = () =>
    api
      .put(`/posts/${id}/like`)
      .then(() => {
        setLiked(true);
        getMyLikes();
      })
      .catch((err) => {});

  const unlikePost = () =>
    api
      .put(`/posts/${id}/unlike`)
      .then(() => {
        setLiked(false);
        getMyLikes();
      })
      .catch((err) => {});

  return (
    <TouchableOpacity onPress={() => (liked ? unlikePost() : likePost())}>
      <AntDesign
        name={liked ? "star" : "staro"}
        size={40}
        color={colors.primary}
      />
    </TouchableOpacity>
  );
};

export default BookmarkButton;

import React, { useEffect, useState, createContext, FC } from "react";
import { Post } from "../@types/post";
import { User } from "../@types/user";
import api from "../api";

interface MeContextState {
  me: User | null;
  myPosts: Post[];
  myLikes: Post[];
  loading: boolean;
  error: string;
  getMe: () => void;
  getMyPosts: () => void;
  getMyLikes: () => void;
}

const contextDefaultValue: MeContextState = {
  me: null,
  myPosts: [],
  myLikes: [],
  loading: false,
  error: "",
  getMe: () => {},
  getMyPosts: () => {},
  getMyLikes: () => {},
};

export const MeContext = createContext<MeContextState>(contextDefaultValue);

export const MeContextProvider: FC = ({ children }) => {
  const [me, setMe] = useState<User | null>(contextDefaultValue.me);
  const [myPosts, setMyPosts] = useState(contextDefaultValue.myPosts);
  const [myLikes, setMyLikes] = useState(contextDefaultValue.myLikes);
  const [loading, setLoading] = useState<boolean>(contextDefaultValue.loading);
  const [error, setError] = useState<string>(contextDefaultValue.error);

  const getMe = async () => {
    setError("");
    setLoading(true);
    try {
      const response = await api.get(`/users/me`);
      setMe(response.data);
    } catch (error) {
      setError("Something went wrong");
    }
    setLoading(false);
  };

  const getMyPosts = async () => {
    setError("");
    setLoading(true);
    try {
      const response = await api.get(`/users/me/posts`);
      setMyPosts(response.data);
    } catch (error) {
      setError("Something went wrong");
    }
    setLoading(false);
  };

  const getMyLikes = async () => {
    setError("");
    setLoading(true);
    try {
      const response = await api.get(`/users/me/likes`);
      setMyLikes(response.data);
    } catch (error) {
      setError("Something went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    getMe();
  }, []);

  useEffect(() => {
    getMyPosts();
  }, []);

  useEffect(() => {
    getMyLikes();
  }, []);

  return (
    <MeContext.Provider
      value={{
        me,
        myPosts,
        myLikes,
        loading,
        error,
        getMe,
        getMyPosts,
        getMyLikes,
      }}
    >
      {children}
    </MeContext.Provider>
  );
};

import React, { useEffect, useState, createContext, FC } from "react";
import { Post } from "../@types/post";
import { User } from "../@types/user";
import api from "../api";

type MeContextState = {
  me: User | null;
  myPosts: Post[];
  loading: boolean;
  error: string;
  getMe: () => void;
  getMyPosts: () => void;
};

const contextDefaultValue: MeContextState = {
  me: null,
  myPosts: [],
  loading: false,
  error: "",
  getMe: () => {},
  getMyPosts: () => {},
};

export const MeContext = createContext<MeContextState>(contextDefaultValue);

export const MeContextProvider: FC = ({ children }) => {
  const [me, setMe] = useState<User | null>(contextDefaultValue.me);
  const [myPosts, setMyPosts] = useState(contextDefaultValue.myPosts);
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

  useEffect(() => {
    getMe();
  }, []);

  useEffect(() => {
    getMyPosts();
  }, []);

  return (
    <MeContext.Provider
      value={{
        me,
        myPosts,
        loading,
        error,
        getMe,
        getMyPosts,
      }}
    >
      {children}
    </MeContext.Provider>
  );
};

import React, { useEffect, useState, createContext, FC } from "react";
import { User } from "../@types/user";
import api from "../api";

type MeContextState = {
  me: User | null;
  myFollowers: number | null;
  myFollowing: number | null;
  loading: boolean;
  error: string;
  getMe: () => void;
  getMyFollowers: (id: string) => void;
  getMyFollowing: (id: string) => void;
};

const contextDefaultValue: MeContextState = {
  me: null,
  myFollowers: null,
  myFollowing: null,
  loading: false,
  error: "",
  getMe: () => {},
  getMyFollowers: () => {},
  getMyFollowing: () => {},
};

export const MeContext = createContext<MeContextState>(contextDefaultValue);

export const MeContextProvider: FC = ({ children }) => {
  const [me, setMe] = useState(contextDefaultValue.me);
  const [myFollowers, setMyFollowers] = useState(
    contextDefaultValue.myFollowers
  );
  const [myFollowing, setMyFollowing] = useState(
    contextDefaultValue.myFollowing
  );
  const [loading, setLoading] = useState(contextDefaultValue.loading);
  const [error, setError] = useState(contextDefaultValue.error);

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

  const getMyFollowers = async (id: string) => {
    setError("");
    setLoading(true);

    try {
      const response = await api.get(`/users/${id}/followers`);
      setMyFollowers(response.data.length);
    } catch (error) {
      setError("Something went wrong");
    }
    setLoading(false);
  };

  const getMyFollowing = async (id: string) => {
    setError("");
    setLoading(true);

    try {
      const response = await api.get(`/users/${id}/following`);
      setMyFollowing(response.data.length);
    } catch (error) {
      setError("Something went wrong");
    }
    setLoading(false);
  };
  useEffect(() => {
    getMe();
  }, []);

  return (
    <MeContext.Provider
      value={{
        me,
        myFollowers,
        myFollowing,
        loading,
        error,
        getMe,
        getMyFollowers,
        getMyFollowing,
      }}
    >
      {children}
    </MeContext.Provider>
  );
};

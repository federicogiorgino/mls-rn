import React, { useState, createContext, FC } from "react";

import { Post } from "../@types/post";
import api from "../api";

interface AdminContextState {
  unmoderatedPosts: Post[];
  loading: boolean;
  error: string;
  getUnmoderatedPosts: () => void;
  rejectPost: (id: string) => void;
  approvePost: (id: string) => void;
}

const contextDefaultValue: AdminContextState = {
  unmoderatedPosts: [],
  loading: false,
  error: "",
  getUnmoderatedPosts: () => {},
  rejectPost: () => {},
  approvePost: () => {},
};

export const AdminContext =
  createContext<AdminContextState>(contextDefaultValue);

export const AdminContextProvider: FC = ({ children }) => {
  const [unmoderatedPosts, setUnmoderatedPosts] = useState<Post[]>(
    contextDefaultValue.unmoderatedPosts
  );
  const [loading, setLoading] = useState<boolean>(contextDefaultValue.loading);
  const [error, setError] = useState<string>(contextDefaultValue.error);

  const getUnmoderatedPosts = async () => {
    setError("");
    setLoading(true);

    try {
      const response = await api.get("/admin/posts/pending");
      setUnmoderatedPosts(response.data);
    } catch (error) {
      setError("Something went wrong");
    }
    setLoading(false);
  };

  const approvePost = async (id: string) => {
    try {
      await api.put(`/admin/posts/${id}/approve`);
    } catch (error) {
      setError("Something went wrong");
    }
  };

  const rejectPost = async (id: string) => {
    try {
      await api.put(`/admin/posts/${id}/reject`);
    } catch (error) {
      setError("Something went wrong");
    }
  };

  return (
    <AdminContext.Provider
      value={{
        unmoderatedPosts,
        loading,
        error,
        getUnmoderatedPosts,
        approvePost,
        rejectPost,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

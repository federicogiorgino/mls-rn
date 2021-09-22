import React, { useEffect, useState, createContext, FC } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../api";

type LoginCredentials = {
  email: string;
  password: string;
};

type RegisterCredentials = {
  username: string;
  email: string;
  password: string;
};

type AuthContextState = {
  token: string | null;
  loading: boolean;
  tokenLoading: boolean;
  error: string;
  login: (credentials: LoginCredentials) => void;
  register: (credentials: RegisterCredentials) => void;
  logout: () => void;
  clearError: () => void;
};

const contextDefaultValue: AuthContextState = {
  token: null,
  loading: false,
  tokenLoading: false,
  error: "",
  login: () => {},
  register: () => {},
  logout: () => {},
  clearError: () => {},
};

export const AuthContext = createContext<AuthContextState>(contextDefaultValue);

export const AuthContextProvider: FC = ({ children }) => {
  const [token, setToken] = useState(contextDefaultValue.token);
  const [tokenLoading, setTokenLoading] = useState(
    contextDefaultValue.tokenLoading
  );
  const [loading, setLoading] = useState(contextDefaultValue.loading);
  const [error, setError] = useState(contextDefaultValue.error);

  const register = async (credentials: RegisterCredentials) => {
    setError("");
    setLoading(true);

    try {
      const { username, email, password } = credentials;
      const response = await api.post("/auth/register", {
        username,
        email,
        password,
      });

      await AsyncStorage.setItem("@M.L.S./token", response.data.token);
      setToken(response.data.token);
    } catch (error) {
      setError("Something went wrong");
    }
    setLoading(false);
  };

  const login = async (credentials: LoginCredentials) => {
    setError("");
    setLoading(true);

    try {
      const { email, password } = credentials;
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      await AsyncStorage.setItem("@M.L.S./token", response.data.token);
      setToken(response.data.token);
    } catch (error) {
      setError("Something went wrong");
    }
    setLoading(false);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("@M.L.S./token");
    setToken(null);
  };

  const clearError = () => {
    setError("");
  };

  const loadToken = async () => {
    setTokenLoading(true);
    try {
      const token = await AsyncStorage.getItem("@M.L.S./token");
      if (token !== null) {
        setToken(token);
      }
    } catch (error) {
      setError("Something went wrong");
    }
    setTokenLoading(false);
  };

  useEffect(() => {
    loadToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        tokenLoading,
        loading,
        error,
        login,
        register,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

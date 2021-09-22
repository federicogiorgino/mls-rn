import React, { FC } from "react";
import { AuthContextProvider } from "./src/context/Auth.context";
import { ThemeContextProvider } from "./src/context/Theme.context";
import { Routes } from "./src/navigation/Routes";

const App: FC = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};

export default App;

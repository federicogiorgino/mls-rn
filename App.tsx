import React, { FC } from "react";
import { ThemeContextProvider } from "./src/context/Theme.context";
import { Routes } from "./src/navigation/Routes";

const App: FC = () => {
  return (
    <ThemeContextProvider>
      <Routes />
    </ThemeContextProvider>
  );
};

export default App;

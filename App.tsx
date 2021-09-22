import React, { FC } from "react";
import { ThemeContextProvider } from "./src/context/Theme.context";

const App: FC = () => {
  return <ThemeContextProvider></ThemeContextProvider>;
};

export default App;

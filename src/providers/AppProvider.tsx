import React from "react";
import { AppContext } from "./context";
type PropType = {
  children?: JSX.Element;
};
const AppProvider: React.FC<PropType> = ({ children }) => {
  return <AppContext.Provider value={""}>{children}</AppContext.Provider>;
};
export default AppProvider;

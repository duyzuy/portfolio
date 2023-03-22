import React from "react";
import { CursorContext } from "./context";
import { useState } from "react";
type PropType = {
  children?: JSX.Element;
};
const CursorProvider: React.FC<PropType> = ({ children }) => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  return (
    <CursorContext.Provider
      value={{ setCursorText, setCursorVariant, cursorText, cursorVariant }}
    >
      {children}
    </CursorContext.Provider>
  );
};
export default CursorProvider;

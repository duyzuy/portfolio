import { createContext } from "react";
import { CursorContextType } from "../models";
const CursorContext = createContext<CursorContextType>({
  cursorText: "",
  cursorVariant: "default",
  setCursorText: () => {},
  setCursorVariant: () => {},
});
export { CursorContext };

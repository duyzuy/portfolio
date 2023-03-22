import { useContext } from "react";
import { CursorContext } from "../providers/context";
import { CursorContextType } from "../models";
const useCursorContext = (): CursorContextType => {
  return useContext(CursorContext);
};
export { useCursorContext };

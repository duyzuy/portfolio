import { useContext, useCallback, memo } from "react";
import { CursorContext } from "../providers/context";
import { CursorContextType } from "../models";
const useCursorContext = (): {
  onSetCursorVariant: (value: string) => void;
  onSetCursorText: (value: string) => void;
  cursorText: string;
  cursorVariant: string;
} => {
  const { setCursorText, setCursorVariant, cursorText, cursorVariant } =
    useContext(CursorContext);

  const onSetCursorText = useCallback((value: string) => {
    setCursorText(value);
  }, []);

  const onSetCursorVariant = useCallback((value: string) => {
    setCursorVariant(value);
  }, []);

  return {
    onSetCursorVariant,
    onSetCursorText,
    cursorText,
    cursorVariant,
  };
};
export { useCursorContext };

import { VariantsType } from "../models";
import { useCursorContext } from "../providers/hooks";

export const useOnCardEnter = () => {
  const { onSetCursorText, onSetCursorVariant } = useCursorContext();
  onSetCursorText("");
  onSetCursorVariant(VariantsType.card);
};

export const useOnCardLeave = () => {
  const { onSetCursorText, onSetCursorVariant } = useCursorContext();
  onSetCursorText("");
  onSetCursorVariant(VariantsType.default);
};
export const useOnMouseLeaveButton = () => {
  const { onSetCursorText, onSetCursorVariant } = useCursorContext();
  onSetCursorText("");
  onSetCursorVariant(VariantsType.default);
};
export const useOnMouseEnterButton = () => {
  const { onSetCursorText, onSetCursorVariant } = useCursorContext();
  onSetCursorVariant(VariantsType.button);
  onSetCursorText("Click");
};

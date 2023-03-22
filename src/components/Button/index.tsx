import React, { memo, useCallback } from "react";
import "./button.scss";
import { useCursorContext } from "../../providers/hooks";
import { VariantsType } from "../../models";
type PropType = {
  text?: string;
  onClick?: () => void;
  variants?: "contained" | "outline";
  children?: JSX.Element | string;

  onMouseLeave?: () => void;
};
const Button: React.FC<PropType> = ({
  text,
  onClick,
  variants,
  children,

  onMouseLeave,
}) => {
  const { onSetCursorVariant, onSetCursorText } = useCursorContext();
  const onMouseEnter = useCallback(() => {
    onSetCursorVariant(VariantsType.button);
    onSetCursorText("Click");
  }, []);
  console.log("btn render");
  return (
    <button
      className="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};
export default memo(Button);

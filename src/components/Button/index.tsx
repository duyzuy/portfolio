import React, { memo } from "react";
import { motion } from "framer-motion";
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
  const { setCursorVariant, setCursorText } = useCursorContext();
  const onMouseEnter = () => {
    setCursorVariant(VariantsType.button);
    setCursorText("Click");
  };
  return (
    <motion.button
      className="button"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.button>
  );
};
export default memo(Button);

import React, { memo } from "react";
import { motion } from "framer-motion";
import "./button.scss";
import { useCursor } from "../../pages/RootElement";
type PropType = {
  text?: string;
  onClick?: () => void;
  variants?: "contained" | "outline";
  children?: JSX.Element | string;
  onCursorEnter?: () => void;
  onCursorLeave?: () => void;
};
const Button: React.FC<PropType> = ({
  text,
  onClick,
  variants,
  children,
  onCursorEnter,
  onCursorLeave,
}) => {
  const { setCursorText, setCursorVariant } = useCursor();

  const onMouseEnter = () => {
    setCursorText("");
    setCursorVariant("wrapper");
  };

  const onMouseLeave = () => {
    setCursorText("");
    setCursorVariant("project");
  };
  console.log("btn");
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

import React from "react";
import { motion } from "framer-motion";
type PropsType = {
  variants?: { [key: string]: any };
  cursorVariant?: string;
  spring?: any;
  cursorText?: string;
};
const Pointer: React.FC<PropsType> = ({
  variants,
  cursorVariant,
  spring,
  cursorText,
}) => {
  return (
    <motion.div
      variants={variants}
      className="circle"
      animate={cursorVariant}
      transition={spring}
    >
      <span className="cursorText">{cursorText}</span>
    </motion.div>
  );
};
export default Pointer;

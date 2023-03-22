import React from "react";
import { motion } from "framer-motion";
type PropsType = {
  variants?: { [key: string]: any };
  cursorVariant?: string;
  cursorText?: string;
};
const CursorPointer: React.FC<PropsType> = ({
  variants,
  cursorVariant,
  cursorText,
}) => {
  return (
    <motion.div
      variants={variants}
      className="circle"
      animate={cursorVariant}
      transition={{ type: "spring", damping: 10, stiffness: 100 }}
    >
      <span className="cursorText">{cursorText}</span>
    </motion.div>
  );
};
export default CursorPointer;

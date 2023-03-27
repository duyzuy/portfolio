import React, { useMemo, memo } from "react";
import { motion } from "framer-motion";
import AnimationText from "../AnimationText";
import { TagType } from "../../models";
const PageTitle: React.FC<{
  text?: string;
  type?: TagType;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}> = ({ text, type = "heading1", className, onMouseEnter, onMouseLeave }) => {
  const clss = useMemo(() => {
    let cls = "page-title";
    if (className) {
      cls = cls.concat(" ", className);
    }
    return cls;
  }, [className]);

  const placeholderText = useMemo(() => {
    let animateText = { type: "heading1", text: "" };

    if (text) {
      animateText = {
        ...animateText,
        text: text,
      };
    }
    if (type) {
      animateText = {
        ...animateText,
        type: type,
      };
    }
    return animateText;
  }, [text, type]);

  const variants = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <>
      <div className={clss}>
        <motion.div
          className="text-animate"
          initial="hidden"
          animate="visible"
          variants={variants}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <AnimationText {...placeholderText} />
        </motion.div>
      </div>
    </>
  );
};
export default memo(PageTitle);

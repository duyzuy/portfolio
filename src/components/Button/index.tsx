import React, { memo, useEffect } from "react";
import { motion } from "framer-motion";
import * as Icon from "react-feather";
import "./button.scss";

type PropType = {
  text?: string;
  onClick?: () => void;
  variants?: "contained" | "outline";
  children?: JSX.Element | string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
const Button: React.FC<PropType> = ({
  text,
  onClick,
  variants,
  children,
  onMouseEnter,
  onMouseLeave,
}) => {
  console.log("btn render");

  const variantsButton = {
    start: {
      borderColor: "transparent",
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
        delay: 0.5,
      },
    },
    hover: {
      borderColor: "#000",
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
        delay: 0.5,
      },
    },
  };

  const textMotion = {
    start: {
      letterSpacing: 0,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
        delay: 0.4,
      },
    },
    hover: {
      letterSpacing: "1px",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  const variantsArrow = {
    start: {
      opacity: 0,
      ease: "easeOut",
      duration: 0.2,
      type: "tween",
      x: "-100%",
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
        delay: 0.3,
      },
    },
    hover: {
      opacity: 1,
      x: "50%",
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
        delay: 0.3,
      },
    },
  };
  const variantsDot = {
    start: {
      opacity: 0.1,
      transition: {
        delay: 0.6,
      },
    },
    hover: {
      opacity: 0,
    },
  };

  return (
    <motion.button
      className="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial="start"
      whileHover="hover"
      animate="start"
      variants={variantsButton}
    >
      <motion.span className="dot" variants={variantsDot}></motion.span>
      <motion.span className="button__text" variants={textMotion}>
        {children}
      </motion.span>
      <motion.span className="arrow" variants={variantsArrow}>
        <Icon.ArrowRight size={16} />
      </motion.span>
    </motion.button>
  );
};
export default memo(Button);

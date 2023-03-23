import React, { memo, useEffect } from "react";
import { motion } from "framer-motion";
import * as Icon from "react-feather";
import { useAnimate } from "framer-motion";
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
  const [scope, animate] = useAnimate();
  console.log("btn render");

  const bottonVariants = {};
  function onTap(event: any, info: any) {
    console.log(info.point.x, info.point.y);
  }

  const textMotion = {
    rest: {
      color: "#000",
      x: 0,
      transition: {
        duration: 2,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      color: "blue",
      x: 30,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const variantsArrow = {
    rest: {
      opacity: 0,
      ease: "easeOut",
      duration: 0.2,
      type: "tween",
      x: "-100%",
    },
    hover: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
      },
    },
  };
  const variantsDot = {
    rest: {
      opacity: 0,
      ease: "easeOut",
      duration: 0.2,
      type: "tween",
      x: "-100%",
    },
    hover: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.button
      className="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      variants={bottonVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
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

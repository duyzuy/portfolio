import React, { useState, useRef, useEffect, memo, useCallback } from "react";
import { Outlet } from "react-router-dom";
import useMouse from "@react-hook/mouse-position";
import { useFollowPointer } from "../../hooks/useFollowPointer";
import CursorPointer from "./components/CursorPointer";
import { useCursorContext } from "../../providers/hooks";
import { motion } from "framer-motion";
import "./style.scss";
import { VariantsType } from "../../models";
const RootElement = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const rootRef = useRef<HTMLDivElement>(null);

  const { cursorText, cursorVariant, onSetCursorText, onSetCursorVariant } =
    useCursorContext();
  const mouse = useMouse(rootRef, {
    enterDelay: 100,
    leaveDelay: 300,
  });
  useEffect(() => {
    if (mouse.clientX === null || mouse.clientY === null) {
      return;
    }
    setMousePosition({
      x: mouse.clientX,
      y: mouse.clientY,
    });
  }, [mouse]);

  const variants = {
    hide: {
      opacity: 0,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "rgb(0 0 0 / 0%)",
      border: "1px solid rgb(0 0 0 / 0%)",
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "rgb(0 0 0 / 100%)",
      border: "1px solid rgb(0 0 0 / 0%)",
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    card: {
      opacity: 1,
      backgroundColor: "rgb(0 0 0 / 100%)",
      border: "1px solid rgb(0 0 0 / 0%)",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    text: {
      opacity: 1,
      backgroundColor: "rgb(0 0 0 / 0%)",
      border: "1px solid rgb(0 0 0 / 0%)",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
    },
    button: {
      opacity: 1,
      mixBlendMode: "darken",
      backgroundColor: "rgb(0 0 0 / 0%)",
      border: "1px solid rgb(0 0 0 / 100%)",
      color: "#000",
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
    },
  };

  const onMouseLeave = useCallback(() => {
    onSetCursorVariant(VariantsType.hide);
    onSetCursorText("");
  }, []);

  const onMouseEnter = useCallback(() => {
    onSetCursorVariant(VariantsType.default);
    onSetCursorText("");
  }, []);
  return (
    <div
      className="root-app"
      ref={rootRef}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <CursorPointer
        variants={variants}
        cursorText={cursorText}
        cursorVariant={cursorVariant}
      />
      <Outlet />
    </div>
  );
};
export default memo(RootElement);

import React, { useState, useRef, useEffect, memo } from "react";
import { Outlet } from "react-router-dom";
import useMouse from "@react-hook/mouse-position";

import CursorPointer from "./components/CursorPointer";
import { useCursorContext } from "../../providers/hooks";
import "./style.scss";
import { VariantsType } from "../../models";
const RootElement = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const rootRef = useRef<HTMLDivElement>(null);
  const { cursorText, cursorVariant, setCursorVariant, setCursorText } =
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
      backgroundColor: "#fff",
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
      backgroundColor: "#1e91d6",
      clipPath: "circle(50% at 50% 50%)",
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    card: {
      opacity: 1,
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      clipPath: "circle(50% at 50% 50%)",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    text: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
    },
    button: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      clipPath:
        "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
    },
  };

  return (
    <div
      className="root-app"
      ref={rootRef}
      onMouseLeave={() => {
        setCursorVariant(VariantsType.hide);
        setCursorText("");
      }}
      onMouseEnter={() => {
        setCursorVariant(VariantsType.default);
        setCursorText("");
      }}
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

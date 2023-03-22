import React, { useState, useRef, useEffect, memo } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import useMouse from "@react-hook/mouse-position";
import Pointer from "./components/Pointer";
import Header from "../../components/Header";
import "./style.scss";
type SetCursorContextType = (arg: string) => void;
type SetCursorVariantType = (arg: string) => void;

const RootElement = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  // const [mousePonsition, setMousePosition] = useState({ x: 0, y: 0 });
  const rootRef = useRef(null);
  const mouse = useMouse(rootRef, {
    enterDelay: 0,
    leaveDelay: 1000,
  });
  // useEffect(() => {
  //   if (mouse.pageX === null || mouse.pageY === null) return;
  //   setMousePosition({ x: mouse.pageX || 0, y: mouse.pageY || 0 });
  // }, [mouse]);

  const functiona = () => {
    console.log("a");
  };
  const functionb = () => {
    console.log("a");
  };
  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX || 0;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY || 0;
  }
  const spring = {
    type: "spring",
  };

  const variants = {
    hide: {
      opacity: 0,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#fff",
      x: mouseXPosition,
      y: mouseYPosition,
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
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  };

  return (
    <div className="root-app" ref={rootRef}>
      <Pointer
        variants={variants}
        cursorText={cursorText}
        cursorVariant={cursorVariant}
        spring={spring}
      />
      <Outlet context={{ functiona, functionb }} />
    </div>
  );
};
export default memo(RootElement);

const useCursor = () => {
  return useOutletContext<{
    setCursorText: SetCursorContextType;
    setCursorVariant: SetCursorVariantType;
  }>();
};
export { useCursor };

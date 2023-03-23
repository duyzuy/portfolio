import React, { useState, useRef, useEffect, memo, useCallback } from "react";
import { Outlet } from "react-router-dom";
import useMouse from "@react-hook/mouse-position";
import CursorPointer from "./components/CursorPointer";
import { useCursorContext } from "../../providers/hooks";

import { VariantsType } from "../../models";
import { motionVariants } from "../../utils/motionVariants";

import "./style.scss";
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

  const variants = motionVariants(mousePosition);

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

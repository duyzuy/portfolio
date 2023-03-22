import React, { useEffect, useState } from "react";

const CustomCursor: React.FC<{
  mousePosition: any;
  variant?: { [key: string]: any };
  cursorText?: string | "";
}> = ({ mousePosition, variant, cursorText }) => {
  return (
    <span
      className="custom-cursor"
      style={{
        top: mousePosition.y,
        left: mousePosition.x,
        transition: "linear 240ms",
        pointerEvents: "none",
        cursor: "none",
      }}
    >
      <span className="cursor-text">{cursorText}</span>
    </span>
  );
};
export default CustomCursor;

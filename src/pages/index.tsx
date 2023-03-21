import React, { memo } from "react";
import Button from "../components/Button";
import { useCursor } from "./RootElement";
import CardImage from "../components/CardImage";
const Home = () => {
  const { setCursorText, setCursorVariant } = useCursor();
  const btns = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
  ];
  const onMouseEnter = () => {
    setCursorText("home");
    setCursorVariant("project");
  };

  const onMouseLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };
  console.log("home");
  return (
    <div
      className="page-wrapper home"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <div className="container">
        this is home page
        <div>
          <Button>explore</Button>
        </div>
        <div className="flex">
          <CardImage />
        </div>
      </div>
    </div>
  );
};
export default memo(Home);

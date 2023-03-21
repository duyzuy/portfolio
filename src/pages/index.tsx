import React, { memo } from "react";
import Button from "../components/Button";
import { useCursor } from "./RootElement";
const Home = () => {
  const { setCursorText, setCursorVariant } = useCursor();

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
      style={{ height: "50vh", backgroundColor: "#f1f1f1" }}
    >
      this is home page
      <div>
        <Button>asdf</Button>
      </div>
    </div>
  );
};
export default memo(Home);

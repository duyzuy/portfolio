import React, { useEffect, useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const ref = React.useRef(null);
  const [lst, setlast] = useState<{ x: number | null; y: number | null }>({
    x: 0,
    y: 0,
  });
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 1000,
  });

  let mouseXPosition = lst.x;
  let mouseYPosition = lst.y;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }
  useEffect(() => {
    if (mouse.x === null || mouse.y === null) {
      setlast(() => ({
        x: mouse.x,
        y: mouse.y,
      }));
    }
  }, [mouse]);

  const variants = {
    wrapper: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: (mouseXPosition && mouseXPosition) || 0,
      y: (mouseYPosition && mouseYPosition) || 0,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    default: {
      opacity: 0,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: (mouseXPosition && mouseXPosition) || 0,
      y: (mouseYPosition && mouseYPosition) || 0,
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
      x: (mouseXPosition && mouseXPosition - 32) || 0,
      y: (mouseYPosition && mouseYPosition - 32) || 0,
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
      x: (mouseXPosition && mouseXPosition - 48) || 0,
      y: (mouseYPosition && mouseYPosition - 48) || 0,
    },
  };

  const spring = {
    type: "spring",
  };

  function projectEnter() {
    setCursorText("View");
    setCursorVariant("project");
  }

  function projectLeave() {
    setCursorText("");
    setCursorVariant("wrapper");
  }

  function contactEnter() {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function contactLeave() {
    setCursorText("");
    setCursorVariant("wrapper");
  }
  const wrapperEnter = () => {
    setCursorText("");
    setCursorVariant("wrapper");
  };
  const wrapperLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  function buttonEnter() {
    setCursorText("Click");
    setCursorVariant("project");
  }
  function buttonLeave() {
    setCursorText("view");
    setCursorVariant("project");
  }

  return (
    <div>
      <div
        className="container"
        ref={ref}
        onMouseEnter={wrapperEnter}
        onMouseLeave={wrapperLeave}
      >
        <motion.div
          variants={variants}
          className="circle"
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText">{cursorText}</span>
        </motion.div>
        <div
          className="project"
          onMouseEnter={projectEnter}
          onMouseLeave={projectLeave}
        >
          <span
            className="projectName"
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
          >
            Discord Onboarding
          </span>
        </div>
        <div className="contactWrapper">
          <div
            className="contact"
            onMouseEnter={contactEnter}
            onMouseLeave={contactLeave}
          >
            Want to Chat?
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { memo, useCallback, useState } from "react";
import Button from "../components/Button";
import CardImage from "../components/CardImage";
import { VariantsType } from "../models";
import { useCursorContext } from "../providers/hooks";
import PageTitle from "../components/PageTitle";
import AnimationText from "../components/AnimationText";
import { motion } from "framer-motion";
const Home = () => {
  const { onSetCursorText, onSetCursorVariant } = useCursorContext();
  const btns = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
  ];

  // const onCardEnter = useCallback(() => {
  //   setCursorText("");
  //   setCursorVariant(VariantsType.card);
  // }, []);

  // const onCardLeave = useCallback(() => {
  //   setCursorText("");
  //   setCursorVariant(VariantsType.default);
  // }, []);
  const onMouseLeaveButton = useCallback(() => {
    onSetCursorText("");
    onSetCursorVariant(VariantsType.default);
  }, []);
  // const placeholderText = [
  //   { type: "heading1", text: "Framer Motion" },
  //   {
  //     type: "heading2",
  //     text: "Animating responsive text!",
  //   },
  // ];
  // const [replay, setReplay] = useState(true);

  // const container = {
  //   visible: {
  //     transition: {
  //       staggerChildren: 0.025,
  //     },
  //   },
  // };
  // const handleReplay = useCallback(() => {
  //   setReplay(!replay);
  // }, []);
  console.log("home render");
  return (
    <div className="page-wrapper home" style={{ backgroundColor: "#f1f1f1" }}>
      <div className="container">
        <PageTitle text="Home" />

        {/* <motion.div
          className="App"
          initial="hidden"
          // animate="visible"
          animate={replay ? "visible" : "hidden"}
          variants={container}
        >
          <div className="container">
            {placeholderText.map((item, index) => {
              return <AnimationText {...item} key={index} />;
            })}
          </div>
        </motion.div>
        <button onClick={handleReplay}>
          Replay <span>⟲</span>
        </button> */}
        <Button onMouseLeave={onMouseLeaveButton}>explore</Button>
        {/* <div>
          {btns.map((btn) => (
            <Button key={btn} onMouseLeave={onMouseLeaveButton}>
              explore
            </Button>
          ))}
        </div>
        <div></div> */}
        {/* <div className="flex">
          {btns.map((btn) => (
            <CardImage
              key={btn}
              onMouseLeave={onCardLeave}
              onMouseEnter={onCardEnter}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};
export default memo(Home);

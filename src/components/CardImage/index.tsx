import React, { memo, useRef, useCallback } from "react";
import Button from "../Button";
import { motion, useScroll } from "framer-motion";
import "./card-image.scss";
import { useCursorContext } from "../../providers/hooks";

const CardImage: React.FC<{
  image?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}> = ({ onMouseLeave, onMouseEnter, image }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["end end", "start start"],
  });

  const { onSetCursorVariant, onSetCursorText } = useCursorContext();

  // const onMouseEnter = () => {
  //   setCursorVariant("card");
  //   setCursorText("view");
  // };
  console.log("card render");
  return (
    <div
      className="card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={cardRef}
    >
      <div className="card__inner">
        <figure className="progress">
          <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
        <div className="card__image">
          <img
            src="https://cdn.discordapp.com/attachments/577203676108685331/790326977714192465/Tile_Image.png"
            alt="image"
          />
        </div>
        <div className="card__content">
          <h1>this is image</h1>
          <Button onMouseLeave={onMouseEnter}>view more</Button>
        </div>
      </div>
    </div>
  );
};
export default memo(CardImage);

import React, { memo } from "react";
import Button from "../Button";
import { useCursor } from "../../pages/RootElement";
import "./card-image.scss";
const CardImage = () => {
  const { setCursorText, setCursorVariant } = useCursor();
  const onMouseEnter = () => {
    setCursorText("view");
    setCursorVariant("project");
  };

  const onMouseLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };
  return (
    <div
      className="card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="card__inner">
        <div className="card__image">
          <img
            src="https://cdn.discordapp.com/attachments/577203676108685331/790326977714192465/Tile_Image.png"
            alt="image"
          />
        </div>
        <div className="card__content">
          <h1>this is image</h1>
          <Button>view more</Button>
        </div>
      </div>
    </div>
  );
};
export default memo(CardImage);

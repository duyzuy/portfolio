import React, { memo, useRef } from "react";
import Button from "../Button";
import "./card-image.scss";

const CardImage: React.FC<{
  image: string;
  title?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseEnterButton?: () => void;
}> = ({ onMouseLeave, onMouseEnter, onMouseEnterButton, image, title }) => {
  const cardRef = useRef(null);

  return (
    <div
      className="card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={cardRef}
    >
      <div className="card__inner">
        <div className="card__image">
          <img src={image} alt={title} />
        </div>
        <div className="card__content">
          <h1>This is image</h1>
          <div className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
          <Button onMouseEnter={onMouseEnterButton} onMouseLeave={onMouseEnter}>
            view more
          </Button>
        </div>
      </div>
    </div>
  );
};
export default memo(CardImage);

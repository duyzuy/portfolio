import React, { memo, useRef, useState } from "react";
import Button from "../Button";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  Variants,
} from "framer-motion";
import "./card-image.scss";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const CardImage: React.FC<{
  image: string;
  title?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseEnterButton?: () => void;
}> = ({ onMouseLeave, onMouseEnter, onMouseEnterButton, image, title }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: cardRef });
  const y = useParallax(scrollYProgress, 300);

  const cardVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: 300,
    },
    onscreen: {
      opacity: 1,
      y: 50,
      transition: {
        type: "spring",
        duration: 0.6,
      },
    },
  };
  const contentVariants: Variants = {
    offscreen: {
      opacity: 0,
      x: "-100%",
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.6,
        delay: 0.3,
      },
    },
  };

  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      className="card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={cardRef}
    >
      <div className="card__inner">
        <motion.div
          className="card__image"
          viewport={{ once: false }}
          onViewportEnter={() => setIsInView(true)}
          transition={{ duration: 1, delay: 1 }}
          variants={cardVariants}
          animate={isLoaded && isInView ? "onscreen" : "offscreen"}
        >
          <img src={image} alt={title} onLoad={() => setIsLoaded(true)} />
        </motion.div>
        <motion.div
          className="card__content"
          variants={contentVariants}
          animate={isLoaded && isInView ? "onscreen" : "offscreen"}
        >
          <h1>This is image</h1>
          <div className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
          <Button onMouseEnter={onMouseEnterButton} onMouseLeave={onMouseEnter}>
            View detail
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default memo(CardImage);

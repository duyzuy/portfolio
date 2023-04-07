import React, { ReactNode, useRef } from "react";
// import "./styles.css";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const CHILD_VARIANTS_SCALE = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.1 },
};

const CHILD_VARIANTS_LEFT = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -500 },
};

const Box: React.FC<{
  color?: string;
  full?: boolean;
  half?: boolean;
  transLeft?: boolean;
  transScale?: boolean;
  triggerOnce?: boolean;
  children?: ReactNode;
}> = ({
  color,
  full = false,
  half = false,
  transLeft = false,
  transScale = false,
  triggerOnce = false,
  children,
}) => {
  //   const { ref, inView, entry } = useInView({
  //     threshold: 0.75,
  //     triggerOnce: triggerOnce,
  //   });

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <div
      className="snap-child-center"
      ref={ref}
      style={{
        height: full ? "100vh" : half ? "50vh" : 120,
        width: "100%",
        backgroundColor: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{
          backgroundColor: "white",
          zIndex: 40,
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={
          transLeft
            ? CHILD_VARIANTS_LEFT
            : transScale
            ? CHILD_VARIANTS_SCALE
            : CHILD_VARIANTS_SCALE
        }
      >
        <h2
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 10,
            marginBottom: 10,
            fontSize: 43,
          }}
        >
          {children}
        </h2>
      </motion.div>
    </div>
  );
};
export default Box;

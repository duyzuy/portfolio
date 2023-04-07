import React, { ReactNode, useEffect, useRef, useState } from "react";
import "./snapscroll.scss";

import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useWindowSize } from "../../hooks/useWindowSize";
import Box from "./Box";
import ContentBox from "./ContentBox";
import Footer from "../Footer";
const LINE_VARIANTS = {
  visible: { height: "0", transition: { duration: 2 } },
  hidden: { height: "0" },
};

const SnapParent = React.forwardRef<
  HTMLDivElement,
  {
    children?: ReactNode;
    style?: any;
  }
>(({ ...props }, ref) => (
  <div ref={ref} {...props} className="snap-parent-y-mandatory">
    {props.children}
  </div>
));

const SnapScrollContainer: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const windowSize = useWindowSize();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useScroll({ container: scrollRef });

  const pageRange = [0, 0.15, 0.3, 0.5, 0.7, 1];
  const lengthRange = ["0%", "18%", "36%", "54%", "72%", "100%"];

  const calcHeight = useTransform(scrollYProgress, pageRange, lengthRange);

  const [scrollYValue, setScrollYValue] = useState(0);
  const [scrollYProgressValue, setScrollYProgressValue] = useState(0);

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    scrollY.onChange((v) => setScrollYValue(v));
    scrollYProgress.onChange((v) => setScrollYProgressValue(v));
  }, [scrollY, scrollYProgress]);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 100,
          zIndex: 50,
        }}
      >
        {"height: " +
          calcHeight.get() +
          " | y: " +
          scrollYValue +
          " | percentage: " +
          (scrollYProgressValue * 100).toFixed(0) +
          "% | WindowSize h: " +
          windowSize.height +
          " w: " +
          windowSize.width +
          "   "}
        <button onClick={refreshPage}>refresh</button>
      </div>
      <div className="scroll-bar">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={LINE_VARIANTS}
          style={{
            backgroundColor: "black",
            width: "100%",
            height: calcHeight,
          }}
        />
      </div>
      <SnapParent
        ref={scrollRef}
        style={{
          position: "absolute",
        }}
      >
        {children}
      </SnapParent>
    </div>
  );
};

const ScrollSample: React.FC = () => {
  return (
    <SnapScrollContainer>
      <Box full color="#FDD692">
        Box 1 (full)
      </Box>
      <Box half triggerOnce transLeft color="#C5E99B">
        Box 2 (half)
      </Box>
      <Box full color="#84B1ED">
        Box 3 (full)
      </Box>
      <Box half triggerOnce transLeft color="#67D5B5">
        Box 4 (half)
      </Box>
      <Box full color="#FDD692">
        Box 5 (full)
      </Box>
      <ContentBox color="white">Box 6 (full)</ContentBox>
      <Box full color="#84B1ED">
        Box 6 (full)
      </Box>

      <Footer />
    </SnapScrollContainer>
  );
};
export { ScrollSample };

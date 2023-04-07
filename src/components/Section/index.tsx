import React, { useRef } from "react";
import "./section.scss";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Section: React.FC<{
  children: JSX.Element;
  name: string;
  className?: string;
}> = ({ children, className, name }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section id={name} className="section">
      <div className="inner-section">
        <div ref={ref}>{children}</div>
        <motion.h2 style={{ y }}>{`#00${name}`}</motion.h2>
      </div>
    </section>
  );
};
export default Section;

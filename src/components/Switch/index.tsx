import React from "react";
import { motion } from "framer-motion";
import "./switch.scss";
type PropType = {
  isOn: boolean;
  onSwitch: () => void;
};
const Switch: React.FC<PropType> = ({ isOn, onSwitch }) => {
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="switch" data-ison={isOn} onClick={onSwitch}>
      <motion.div className="handle" layout transition={spring} />
    </div>
  );
};
export default Switch;

import React from "react";
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
    clientX: 0,
    clientY: 0,
  });

  React.useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({
        x: ev.x,
        y: ev.y,
        clientX: ev.clientX,
        clientY: ev.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};
export default useMousePosition;

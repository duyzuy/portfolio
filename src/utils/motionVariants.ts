export const motionVariants = (mousePosition: any) => ({
  hide: {
    opacity: 0,
    height: 10,
    width: 10,
    fontSize: "16px",
    backgroundColor: "rgb(255 255 255 / 0%)",
    mixBlenMode: "difference",
    border: "1px solid rgb(0 0 0 / 0%)",
    x: mousePosition.x - 5,
    y: mousePosition.y - 5,
    transition: {
      type: "spring",
      mass: 0.6,
    },
  },
  default: {
    opacity: 1,
    height: 10,
    width: 10,
    fontSize: "16px",
    backgroundColor: "rgb(255 255 255 / 100%)",
    mixBlenMode: "difference",
    border: "1px solid rgb(0 0 0 / 0%)",
    x: mousePosition.x - 5,
    y: mousePosition.y - 5,
    transition: {
      type: "spring",
      mass: 0.6,
    },
  },
  card: {
    opacity: 1,
    backgroundColor: "rgb(255 255 255 / 100%)",
    border: "1px solid rgb(0 0 0 / 0%)",
    color: "#fff",
    height: 80,
    width: 80,
    fontSize: "18px",
    x: mousePosition.x - 40,
    y: mousePosition.y - 40,
    transition: {
      type: "spring",
      mass: 0.6,
    },
  },
  text: {
    opacity: 1,
    backgroundColor: "rgb(255 255 255 / 100%)",
    border: "1px solid rgb(0 0 0 / 0%)",
    color: "#000",
    height: 64,
    width: 64,
    fontSize: "32px",
    x: mousePosition.x - 32,
    y: mousePosition.y - 32,
  },
  button: {
    opacity: 1,
    mixBlendMode: "darken",
    backgroundColor: "rgb(0 0 0 / 0%)",
    border: "1px solid rgb(0 0 0 / 100%)",
    color: "#000",
    height: 16,
    width: 16,
    x: mousePosition.x - 8,
    y: mousePosition.y - 8,
  },
});

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useCursor } from "../pages/RootElement";
type PropType = {
  children?: JSX.Element;
};
const Layout: React.FC<PropType> = ({ children }) => {
  const { setCursorText, setCursorVariant } = useCursor();
  return (
    <>
      <Header />
      {children ? (
        children
      ) : (
        <Outlet context={{ setCursorText, setCursorVariant }} />
      )}
      <Footer />
    </>
  );
};
export default Layout;

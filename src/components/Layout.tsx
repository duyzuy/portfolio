import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

type PropType = {
  children?: JSX.Element;
};
const Layout: React.FC<PropType> = ({ children }) => {
  return (
    <>
      <Header />
      {children ? children : <Outlet />}
      <Footer />
    </>
  );
};
export default Layout;

import React, { useCallback } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useCursorContext } from "../providers/hooks";
import { useOutletContext } from "react-router-dom";
import { VariantsType } from "../models";
type PropType = {
  children?: JSX.Element;
};
const Layout: React.FC<PropType> = ({ children }) => {
  const { onSetCursorText, onSetCursorVariant } = useCursorContext();
  const onMouseEnterCard = useCallback(() => {
    onSetCursorText("View");
    onSetCursorVariant(VariantsType.card);
  }, []);

  const onMouseLeaveCard = useCallback(() => {
    onSetCursorText("");
    onSetCursorVariant(VariantsType.default);
  }, []);
  const onMouseLeaveButton = useCallback(() => {
    onSetCursorText("");
    onSetCursorVariant(VariantsType.default);
  }, []);
  const onMouseEnterButton = useCallback(() => {
    onSetCursorVariant(VariantsType.button);
    onSetCursorText("Click");
  }, []);

  const onMouseEnterText = useCallback(() => {
    onSetCursorVariant(VariantsType.text);
    onSetCursorText("");
  }, []);
  const onMouseLeaveText = useCallback(() => {
    onSetCursorVariant(VariantsType.default);
    onSetCursorText("");
  }, []);
  console.log("layout render");

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement<any>(child, {
        onMouseLeaveText,
        onMouseEnterText,
        onMouseEnterButton,
        onMouseLeaveButton,
        onMouseLeaveCard,
        onMouseEnterCard,
      });
    }
    return child;
  });

  return (
    <>
      <Header />
      {childrenWithProps ? (
        childrenWithProps
      ) : (
        <Outlet
          context={{
            onMouseLeaveText,
            onMouseEnterText,
            onMouseEnterButton,
            onMouseLeaveButton,
            onMouseLeaveCard,
            onMouseEnterCard,
          }}
        />
      )}
      <Footer />
    </>
  );
};
export default Layout;

export const useMouseMoveContext = () => {
  return useOutletContext();
};

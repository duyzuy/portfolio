import React, { memo, useCallback } from "react";
import Button from "../components/Button";
import CardImage from "../components/CardImage";
import { VariantsType } from "../models";
import { useCursorContext } from "../providers/hooks";
import PageTitle from "../components/PageTitle";
const Home = () => {
  const { setCursorText, setCursorVariant } = useCursorContext();
  const btns = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
  ];

  const onCardLeave = useCallback(() => {
    setCursorText("");
    setCursorVariant(VariantsType.default);
  }, []);

  return (
    <div className="page-wrapper home" style={{ backgroundColor: "#f1f1f1" }}>
      <div className="container">
        <PageTitle text="Home" />
        <div>
          {btns.map((btn) => (
            <Button
              key={btn}
              onMouseLeave={() => {
                setCursorText("");
                setCursorVariant(VariantsType.default);
              }}
            >
              explore
            </Button>
          ))}
        </div>
        <div></div>
        <div className="flex">
          {btns.map((btn) => (
            <CardImage key={btn} onMouseLeave={onCardLeave} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default memo(Home);

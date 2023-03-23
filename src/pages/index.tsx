import React, { memo, useCallback, useState, useEffect } from "react";
import Button from "../components/Button";
import CardImage from "../components/CardImage";

import PageTitle from "../components/PageTitle";

import AnimationText from "../components/AnimationText";
import { motion } from "framer-motion";
import { useAnimate } from "framer-motion";

const Home = (props: any) => {
  const {
    onMouseEnterButton,
    onMouseLeaveCard,
    onMouseLeaveButton,
    onMouseLeaveText,
    onMouseEnterText,
    onMouseEnterCard,
  } = props;

  console.log("home render");
  return (
    <div className="page-wrapper home">
      <div className="inner-wrapper">
        <div className="section hero-section">
          <div className="container">
            <div className="inner-section">
              <PageTitle
                text="Explore project with many difference"
                type="heading3"
                onMouseEnter={onMouseEnterText}
                onMouseLeave={onMouseLeaveText}
              />
              <Button
                onMouseLeave={onMouseLeaveButton}
                onMouseEnter={onMouseEnterButton}
              >
                explore
              </Button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section">
            <div className="section-header">
              <PageTitle
                text="Project"
                type="heading2"
                onMouseEnter={onMouseEnterText}
                onMouseLeave={onMouseLeaveText}
              />
            </div>
            <div className="section-body">
              <CardImage
                image="./images/web-1.jpg"
                onMouseLeave={onMouseLeaveCard}
                onMouseEnter={onMouseEnterCard}
              />
              <CardImage
                image="./images/web-2.jpg"
                onMouseLeave={onMouseLeaveCard}
                onMouseEnter={onMouseEnterCard}
              />
              <CardImage
                image="./images/web-1.jpg"
                onMouseLeave={onMouseLeaveCard}
                onMouseEnter={onMouseEnterCard}
              />
              <CardImage
                image="./images/web-2.jpg"
                onMouseLeave={onMouseLeaveCard}
                onMouseEnter={onMouseEnterCard}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Home);

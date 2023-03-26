import React, { memo, useCallback, useState, useEffect } from "react";
import Button from "../components/Button";
import CardImage from "../components/CardImage";

import PageTitle from "../components/PageTitle";
import * as Icon from "react-feather";
import { useScroll, useSpring } from "framer-motion";
import { motion } from "framer-motion";

const Home = (props: any) => {
  const {
    onMouseEnterButton,
    onMouseLeaveCard,
    onMouseLeaveButton,
    onMouseLeaveText,
    onMouseEnterText,
    onMouseEnterCard,
  } = props;

  const images = [
    { title: "Du an so 1", path: "./images/web-1.jpg" },
    { title: "Du an so 2", path: "./images/web-2.jpg" },
    { title: "Du an so 3", path: "./images/web-1.jpg" },
    { title: "Du an so 4", path: "./images/web-2.jpg" },
  ];
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="page-wrapper home">
      <div className="inner-wrapper">
        <div className="section hero-section">
          <div className="container">
            <div className="inner-section">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                id="visual"
                viewBox="0 0 900 600"
                width="900"
                height="600"
                version="1.1"
              >
                <rect x="0" y="0" width="900" height="600" fill="#001220" />
                <defs>
                  <linearGradient
                    id="grad1_0"
                    x1="33.3%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="20%" stop-color="#001220" stop-opacity="1" />
                    <stop offset="80%" stop-color="#001220" stop-opacity="1" />
                  </linearGradient>
                </defs>
                <defs>
                  <linearGradient
                    id="grad2_0"
                    x1="0%"
                    y1="100%"
                    x2="66.7%"
                    y2="0%"
                  >
                    <stop offset="20%" stop-color="#001220" stop-opacity="1" />
                    <stop offset="80%" stop-color="#001220" stop-opacity="1" />
                  </linearGradient>
                </defs>
                <g transform="translate(900, 600)">
                  <path
                    d="M-297.5 0C-277.8 -44.7 -258.2 -89.3 -235.6 -136C-212.9 -182.7 -187.3 -231.3 -147.5 -255.5C-107.7 -279.6 -53.9 -279.3 0 -279L0 0Z"
                    fill="#FCAF3C"
                  />
                </g>
                <g transform="translate(0, 0)">
                  <path
                    d="M223 0C217.1 34.5 211.2 69 202.6 117C194.1 165 182.9 226.5 148.7 257.6C114.5 288.7 57.3 289.3 0 290L0 0Z"
                    fill="#FCAF3C"
                  />
                </g>
              </svg>
              <PageTitle
                text="Explore project with many difference"
                type="heading3"
                onMouseEnter={onMouseEnterText}
                onMouseLeave={onMouseLeaveText}
              />
              <div className="icons">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 14V17C17 17.7956 16.6839 18.5587 16.1213 19.1213C15.5587 19.6839 14.7956 20 14 20H8C7.20435 20 6.44129 19.6839 5.87868 19.1213C5.31607 18.5587 5 17.7956 5 17V14H17Z"
                    fill="black"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M17 9V18C17 18.7956 16.6839 19.5587 16.1213 20.1213C15.5587 20.6839 14.7956 21 14 21H8C7.20435 21 6.44129 20.6839 5.87868 20.1213C5.31607 19.5587 5 18.7956 5 18V9H17Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 14H20C20.55 14 21 13.55 21 13V10C21 9.45 20.55 9 20 9H17"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <mask
                    id="mask0_915_2"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="5"
                    y="0"
                    width="12"
                    height="16"
                  >
                    <path
                      d="M8 0C8 2 6 2 6 4C6 6 8 6 8 8C8 10 6 10 6 12C6 14 8 14 8 16M12 0C12 2 10 2 10 4C10 6 12 6 12 8C12 10 10 10 10 12C10 14 12 14 12 16M16 0C16 2 14 2 14 4C14 6 16 6 16 8C16 10 14 10 14 12C14 14 16 14 16 16"
                      stroke="white"
                      stroke-width="2"
                    />
                  </mask>
                  <g mask="url(#mask0_915_2)">
                    <path d="M24 2H0V7H24V2Z" fill="black" />
                  </g>
                </svg>
                <Icon.Code size="60" />
              </div>
              <Button
                onMouseLeave={onMouseLeaveButton}
                onMouseEnter={onMouseEnterButton}
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="section-header">
              <PageTitle
                text="Project"
                type="heading2"
                onMouseEnter={onMouseEnterText}
                onMouseLeave={onMouseLeaveText}
              />
            </div>
            <div
              className="section-body"
              style={{
                perspective: "500px",
                scrollSnapAlign: "center",
              }}
            >
              {images.map((image) => (
                <CardImage
                  key={image.title}
                  image={image.path}
                  onMouseLeave={onMouseLeaveCard}
                  onMouseEnter={onMouseEnterCard}
                  onMouseEnterButton={onMouseEnterButton}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Home);

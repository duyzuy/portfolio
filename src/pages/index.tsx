import React, { memo, useCallback, useState, useEffect, useRef } from "react";
import Button from "../components/Button";
import CardImage from "../components/CardImage";

import PageTitle from "../components/PageTitle";
import * as Icon from "react-feather";
import { useScroll, useSpring } from "framer-motion";
import { motion } from "framer-motion";
import Me from "./RootElement/components/Me";
import { useAnimate, usePresence } from "framer-motion";
import { AnimatePresence, useAnimationFrame } from "framer-motion";

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
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;
    // const rotate = Math.sin(t / 10000) * 200;
    // const y = (1 + Math.sin(t / 1000)) * -50;
    // ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="page-wrapper home">
      <div className="inner-wrapper">
        <div className="section hero-section">
          <div className="container">
            <div className="inner-section">
              <div className="row-hero">
                <div className="col-hero hero-content">
                  <div className="box">
                    <h2 className="title">Hi!, I'm Ryan</h2>
                    <PageTitle text="nguen van a" />
                    <p className="sub-title">Frontend web developer</p>
                    <p className="desc">
                      Currently located in Vietnam, I love building interactive,
                      digital experience on web.
                    </p>
                  </div>
                  <Button
                    onMouseLeave={onMouseLeaveButton}
                    onMouseEnter={onMouseEnterButton}
                  >
                    Let's get in touch!
                  </Button>
                  <div className="socials">
                    <span></span>
                  </div>
                </div>
                <div className="col-hero hero-me">
                  <div className="me-dev">
                    <Me />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          <div className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="title">Skills</h2>
                <p>
                  Familiar with some frameworks and library javascript & php
                </p>
              </div>
              <div className="section-body">
                <div className="skill-list" ref={ref}>
                  <div className="item">
                    <div className="item-icon">
                      <img src="./images/icon/ic-html.svg" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-icon">
                      <img src="./images/icon/ic-css.svg" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-icon">
                      <img src="./images/icon/ic-javascript.svg" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-icon">
                      <img src="./images/icon/ic-laravel.svg" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-icon">
                      <img src="./images/icon/ic-wordpress.svg" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-icon">
                      <img src="./images/icon/ic-node.svg" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-icon">
                      <img src="./images/icon/ic-react.svg" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-icon">
                      <img src="./images/icon/ic-sass.svg" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-icon">
                      <img src="./images/icon/ic-next.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatePresence>
        <div className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="title">What I do</h2>
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

import React, { useState, memo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Switch from "../Switch";
import * as Icon from "react-feather";
import { motion, useMotionValue } from "framer-motion";
import "./header.scss";
const Header = () => {
  const [isLight, setIsLight] = useState(true);

  return (
    <div className="header">
      <div className="container">
        <div className="row-header">
          <div className="col-header logo">
            <Link to="/" className="nav-link">
              <img src="./images/logo-frd.svg" />
            </Link>
          </div>
          <div className="col-header menu">
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/portfolio" className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/about" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-header theme-action">
            <div
              className={`switcher ${(isLight && "light") || "dark"}`}
              onClick={() => setIsLight(!isLight)}
            >
              {(isLight && <Icon.Sun size={16} />) || <Icon.Moon size={16} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Header);

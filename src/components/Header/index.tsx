import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import Switch from "../Switch";
import "./header.scss";
const Header = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="header">
      <div className="container">
        <div className="row-header">
          <div className="col-header logo">
            <Link to="/" className="nav-link">
              <span className="text">FRD</span>
            </Link>
          </div>
          <div className="col-header menu">
            <div className="menu-list">
              <div className="menu-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </div>
              <div className="menu-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </div>
              <div className="menu-item">
                <Link to="/portfolio" className="nav-link">
                  Portfolio
                </Link>
              </div>
              <div className="menu-item">
                <Link to="/about" className="nav-link">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="col-header theme-action">
            <Switch isOn={isOn} onSwitch={toggleSwitch} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Header);

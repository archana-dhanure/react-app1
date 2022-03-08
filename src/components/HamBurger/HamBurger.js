import React from "react";
import "./HamBurger.css";

function HamBurger(props) {
  return (
    <div className="hamburger-menu-icon" onClick={props.clickHamburger}>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
    </div>
  );
}
export default HamBurger;

import React from "react";
import "./NavBar.css";
import NavBarLinks from "./NavBarLink";
import HamBurger from "../HamBurger/HamBurger";

function NavBar(props) {
  return (
    <React.Fragment>
      <div className="navbar">
        <HamBurger clickHamburger={props.NavClick} />
        <NavBarLinks />
      </div>
    </React.Fragment>
  );
}

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { useState } from "react";

function NavBarLinks() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div style={{ marginLeft: "10px" }}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu List
      </Button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <ul className="link-group">
          <li>
            <Link to="/memo"> Memo Comp</Link>
          </li>
          <li>
            <Link to="/bootstrap_demo"> Bootstrap Demo </Link>
          </li>
          <li>
            <Link to="/items"> items nv</Link>
          </li>
          <li>
            <Link to="/cake"> cake</Link>
          </li>
          <li>
            <Link to="/home"> Home</Link>
          </li>
          <li>
            <Link to="/HooksCakeContainer"> HooksCakeContainer</Link>
          </li>
        </ul>
      </Menu>
    </div>
  );
}

export default NavBarLinks;

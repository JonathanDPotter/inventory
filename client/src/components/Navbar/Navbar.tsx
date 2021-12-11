import React, { useState } from "react";
import MenuItem from "./MenuItem";
import Submenu from "./Submenu";
import "./Navbar.scss";

const Navbar = () => {
  const [submenuOneOpen, setSubmenuOneOpen] = useState(false);
  return (
    <nav>
      <div className="menu-container">
        <ul className="menu">
          <li
            className="options"
            onMouseEnter={() => setSubmenuOneOpen(true)}
            onMouseLeave={() => setSubmenuOneOpen(false)}
          >
            <MenuItem open={submenuOneOpen} text="1" />
            <Submenu open={submenuOneOpen} items={["1", "2", "3"]} />
          </li>
        </ul>
      </div>
      <div className="title-container">
        <h1>Title</h1>
      </div>
    </nav>
  );
};

export default Navbar;

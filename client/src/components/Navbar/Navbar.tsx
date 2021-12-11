import React, { useState, FC } from "react";
// components
import MenuItem from "./MenuItem";
import Submenu from "./Submenu";
// types
import Icategory from "../../interfaces/category";
import "./Navbar.scss";

interface InavbarProps {
  categories: Icategory[] | null;
}

const Navbar: FC<InavbarProps> = (props) => {
  const [submenuOneOpen, setSubmenuOneOpen] = useState(false);
  const [submenuTwoOpen, setSubmenuTwoOpen] = useState(false);
  const [submenuThreeOpen, setSubmenuThreeOpen] = useState(false);

  const { categories } = props;
  return (
    <nav>
      <div className="menu-container">
        <ul className="menu">
          <li
            className="options"
            onMouseEnter={() => setSubmenuOneOpen(true)}
            onMouseLeave={() => setSubmenuOneOpen(false)}
          >
            <MenuItem open={submenuOneOpen} text="Categories" />
            <Submenu open={submenuOneOpen} categories={categories} />
          </li>
          <li
            className="options"
            onMouseEnter={() => setSubmenuTwoOpen(true)}
            onMouseLeave={() => setSubmenuTwoOpen(false)}
          >
            <MenuItem open={submenuTwoOpen} text="Contact" />
            <Submenu
              open={submenuTwoOpen}
              items={[{ text: "Phone" }, { text: "E-mail" }]}
            />
          </li>
          <li
            className="options"
            onMouseEnter={() => setSubmenuThreeOpen(true)}
            onMouseLeave={() => setSubmenuThreeOpen(false)}
          >
            <MenuItem open={submenuThreeOpen} text="About" />
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

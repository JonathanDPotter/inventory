import React, { useState, FC } from "react";
// components
import MenuItem from "./MenuItem";
import Submenu from "./Submenu";
// types
import { Icategory } from "../../interfaces/category";
import "./Navbar.scss";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const Navbar: FC = () => {
  const [submenuOneOpen, setSubmenuOneOpen] = useState(false);
  const [submenuTwoOpen, setSubmenuTwoOpen] = useState(false);
  const [submenuThreeOpen, setSubmenuThreeOpen] = useState(false);

  const categories = useSelector<RootState, Icategory[]>(
    (state) => state.categories.categories
  );
  
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
            <MenuItem open={submenuTwoOpen} text="Add/Delete" />
            <Submenu
              open={submenuTwoOpen}
              title="add-delete"
              items={[{ text: "add" }, { text: "delete" }]}
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
        <h1>Fake Shop</h1>
      </div>
    </nav>
  );
};

export default Navbar;

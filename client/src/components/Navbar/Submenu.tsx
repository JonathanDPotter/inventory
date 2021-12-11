import React, { FC } from "react";
import Icategory from "../../interfaces/category";

interface Iitems {
  text: string;
  link: string;
}

interface IsubmenuProps {
  open: boolean;
  categories?: Icategory[] | null;
  items?: Iitems[];
}

const Submenu: FC<IsubmenuProps> = ({ open, categories, items }) => {
  const capitalize = (name: String) => {
    const first = name[0];
    const rest = name.slice(1);
    return first.toUpperCase() + rest;
  };

  return (
    <ul className={`sub-menu ${open ? "open" : "closed"}`}>
      {categories &&
        categories.map((category, i) => {
          const { name } = category;
          return (
            <li className="submenu-item" key={i}>
              {capitalize(name)}
            </li>
          );
        })}
      {items &&
        items.map((item, i) => {
          const { text, link } = item;
          return (
            <a href={link}>
              <li className="submenu-item" key={i}>
                {text}
              </li>
            </a>
          );
        })}
    </ul>
  );
};

export default Submenu;

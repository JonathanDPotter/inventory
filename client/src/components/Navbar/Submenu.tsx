import React, { FC } from "react";
import Icategory from "../../interfaces/category";

interface Iitems {
  text: string;
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
            <a href={`/items/${name}`}>
              <li className="submenu-item" key={i}>
                {capitalize(name)}
              </li>
            </a>
          );
        })}
      {items &&
        items.map((item, i) => {
          const { text } = item;
          return (
            <a href={`/contact/${text}`}>
              <li className="submenu-item" key={i}>
                {text}
              </li>
            </a>
          );
        })}
      {categories && (
        <a href="/items/all">
          <li> All Items</li>
        </a>
      )}
    </ul>
  );
};

export default Submenu;

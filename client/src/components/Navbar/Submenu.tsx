import React, { FC } from "react";
import { capitalize } from "../../functions";
// types
import { Icategory } from "../../interfaces/category";

interface Iitems {
  text: string;
}

interface IsubmenuProps {
  open: boolean;
  categories?: Icategory[] | null;
  items?: Iitems[];
  title?: String;
}

const Submenu: FC<IsubmenuProps> = ({ open, categories, items, title }) => {
  return (
    <ul className={`sub-menu ${open ? "open" : "closed"}`}>
      {categories &&
        categories.map((category, i) => {
          const { name } = category;
          return (
            <a href={`/items/${name}`} key={i}>
              <li className="submenu-item">{capitalize(name)}</li>
            </a>
          );
        })}
      {items &&
        items.map((item, i) => {
          const { text } = item;
          return (
            <a href={`/${title}/${text}`} key={i}>
              <li className="submenu-item">{capitalize(text)}</li>
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

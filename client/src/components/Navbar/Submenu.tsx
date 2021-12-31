import React, { FC } from "react";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
  return (
    <ul className={`sub-menu ${open ? "open" : "closed"}`}>
      {categories &&
        categories.map((category, i) => {
          const { name } = category;
          return (
            <li
              className="submenu-item"
              onClick={() => navigate(`/items/${name}`)}
            >
              {capitalize(name)}
            </li>
          );
        })}
      {items &&
        items.map((item, i) => {
          const { text } = item;
          return (
            <li
              className="submenu-item"
              key={i}
              onClick={() => navigate(`/${title}/${text}`)}
            >
              {capitalize(text)}
            </li>
          );
        })}
      {categories && <li onClick={() => navigate("items/all")}> All Items</li>}
    </ul>
  );
};

export default Submenu;

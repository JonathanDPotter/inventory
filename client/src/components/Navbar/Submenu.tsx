import React, { FC } from "react";

interface IsubmenuProps {
  open: boolean;
  items: string[];
}

const Submenu: FC<IsubmenuProps> = ({ open, items }) => {
  return (
    <ul className={`sub-menu ${open ? "open-menu" : "closed-menu"}`}>
      {items.map((item, i) => {
        return (
          <li className="submenu-item" key={i}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default Submenu;

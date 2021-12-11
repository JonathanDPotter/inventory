import React, { FC } from "react";

interface ImenuProps {
  open: boolean;
  text: string;
}

const MenuItem: FC<ImenuProps> = ({ open, text }) => {
  return <div className={`menu-item ${open ? "open" : "closed"}`}>{text}</div>;
};

export default MenuItem;

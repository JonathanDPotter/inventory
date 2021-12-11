import React, { FC } from "react";

interface ImenuProps {
  open: boolean;
  text: string;
}

const MenuItem: FC<ImenuProps> = (props) => {
  const { open, text } = props;
  return <div className={`menu-item ${open ? "open" : "closed"}`}>{text}</div>;
};

export default MenuItem;

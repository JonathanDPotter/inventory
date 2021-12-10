import React, { useState } from "react";

const Navbar = () => {
  const [optionMenuOpen, setOptionMenuOpen] = useState(false);

  return (
    <header>
      <ul
        className={optionMenuOpen ? "open menu" : "closed menu"}
        onClick={() => setOptionMenuOpen(!optionMenuOpen)}
      >
        <li className="options">1</li>
        <li className="options">2</li>
        <li className="options">3</li>
        <li className="options">4</li>
        <li className="options">5</li>
      </ul>
      <h1>Title</h1>
    </header>
  );
};

export default Navbar;

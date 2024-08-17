"use client";
import React, { useState } from "react";
const Nav = () => {
  const [checked, setChecked] = useState(false);

  return (
    <nav className="nav">
      <h3>Kimmy</h3>
      <div className="nav__icon">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
      </div>

      <ul className={`bar ${checked ? "active" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;

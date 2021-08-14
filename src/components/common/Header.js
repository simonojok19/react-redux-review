import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle = { color: "#f15b2a" };
  return (
    <nav>
      <NavLink path="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      |
      <NavLink path="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
}

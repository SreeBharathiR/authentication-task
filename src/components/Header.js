import React from "react";
import BrandName from "./BrandName";
import "./Header.css";
import LogToggle from "./LogToggle";
const Header = () => {
  return (
    <header>
      <BrandName></BrandName>
      <LogToggle></LogToggle>
    </header>
  );
};

export default Header;

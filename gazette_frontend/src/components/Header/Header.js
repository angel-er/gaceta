// src/components/Navbar.js
import React from "react";
import { HeaderStyle, Logo } from "./Header.styles";
import SelloImage from "#assets/sello-logo.png";

const Header = () => {
  return (
    <HeaderStyle>
      <Logo src={SelloImage} />
    </HeaderStyle>
  );
};

export default Header;

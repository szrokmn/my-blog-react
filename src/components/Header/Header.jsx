import React from "react";
import Navbar from "../Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav, { H1 } from "./Header.styled";

const Header = () => {
  return (
    <HeaderNav>
      <H1>FULL STACK DEVELOPER</H1>
      <Navbar />
    </HeaderNav>
  );
};

export default Header;

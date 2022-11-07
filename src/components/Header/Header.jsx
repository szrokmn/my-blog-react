import React from "react";
import Navbar from "../Navbar/Navbar";
import HeaderNav, { H1, TopHeader } from "./Header.styled";
import Time from "../Time/Time";

const Header = () => {
  return (
    <HeaderNav>
      <TopHeader>
        <Time />
        <H1>FULL STACK DEVELOPER</H1>
      </TopHeader>
      <Navbar />
    </HeaderNav>
  );
};

export default Header;

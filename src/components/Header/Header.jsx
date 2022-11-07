import Navbar from "../Navbar/Navbar";
import HeaderNav, { H1, TopHeader } from "./Header.styled";
import Time from "../Time/Time";
import  Date  from "../Date/Date";

const Header = () => {

  return (
    <HeaderNav>
      <TopHeader>
        <Time />
        <H1>FULL STACK DEVELOPER</H1>
        <Date/>
      </TopHeader>
      <Navbar />
    </HeaderNav>
  );
};

export default Header;

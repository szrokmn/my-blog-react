import styled from 'styled-components';
import { NavLink } from "react-router-dom"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Nav; 

 export const NavbarLink = styled(NavLink)`
  color: red;
`;






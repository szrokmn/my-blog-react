import styled from 'styled-components';
import { NavLink } from "react-router-dom"

const Nav = styled.nav`
width: 100%;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
background-color: red;

`;

export default Nav; 

 export const NavbarLink = styled(NavLink)`
  margin:1.5rem;
  color: black;
  text-decoration: none;
`;






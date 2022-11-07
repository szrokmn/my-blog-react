import styled from 'styled-components';
import { NavLink } from "react-router-dom"

const Nav = styled.nav`
width: 100%;
display: flex;
justify-content: center;
align-items: center;


`;

export default Nav; 

 export const NavbarLink = styled(NavLink)`
  margin:1.5rem;
  color: black;
  text-decoration: none;  
`;






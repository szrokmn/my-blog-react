import React from 'react'
import Nav, { NavbarLink } from './Navbar.styled'


const Navbar = () => {
  return (
    <Nav>
        <ul>
            <NavbarLink to="/">HOME</NavbarLink>
            <NavbarLink to="/about">ABOUT</NavbarLink>
            <NavbarLink to="/videos">VİDEOS</NavbarLink>
            <NavbarLink to="/projects">PROJECTS</NavbarLink>
            <NavbarLink to="/medium">MEDİUM</NavbarLink>
            <NavbarLink to="/contact">CONTACT</NavbarLink>
        </ul>
    </Nav>
  )
}

export default Navbar
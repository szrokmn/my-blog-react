import React from 'react'
import Navbar from '../Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import H1 from './Header.styled';

const Header = () => {
  return (
    <div>
      <H1>FULL STACK DEVELOPER</H1>
        <Navbar/>
    </div>
  )
}

export default Header

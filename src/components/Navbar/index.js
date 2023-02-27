import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/about'>
            About Us
          </NavLink>
          <NavLink to='/adopt'>
            Adopt a Pet
          </NavLink>
          <NavLink to='/put-up'>
            Put up your pet for adoption
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signup'>Register your support</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

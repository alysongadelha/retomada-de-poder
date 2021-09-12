import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <img src={require('../../assets/img/logo/logo.svg')} alt="yes"/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/personagens' activeStyle>
            Personagens
          </NavLink>
          <NavLink to='/npcs' activeStyle>
            Npc's
          </NavLink>
          <NavLink to='/cidade' activeStyle>
            Cidade
          </NavLink>
          <NavLink to='/a-mesa' activeStyle>
            A Mesa
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/doacao'>Doe</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
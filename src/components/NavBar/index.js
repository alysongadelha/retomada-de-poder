import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from '../../assets/img/wod-logo-7fbf82f8.svg';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="Vampire" width={'120px'} />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/personagens" >
            Personagens
          </NavLink>
          <NavLink to="/npcs" >
            Npc's
          </NavLink>
          <NavLink to="/cidade" >
            Cidade
          </NavLink>
          <NavLink to="/a-mesa" >
            A Mesa
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/doacao">Doe</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

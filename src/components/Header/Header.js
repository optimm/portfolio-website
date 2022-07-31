import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img src="./start.png" alt="logo" />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" >
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" >
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" >
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://drive.google.com/file/d/17YcctcDZX0T1zdF7HPtP__X_Zbi6gKJi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;

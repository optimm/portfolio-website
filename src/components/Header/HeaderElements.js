import { FaBars } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

export const Nav = styled.nav`
  background: rgba(17, 17, 24, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLink = styled(ScrollLink)`
  color: rgb(119, 119, 121);
  display: flex;
  font-size: 0.95rem;
  font-weight: 500;
  align-items: center;
  height: 100%;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: #f6f6f6;
  }
`;
export const Logo = styled(LinkRouter)`
  img {
    width: 38px;
    height: 38px;
    animation: x 1s ease-in-out;
  }
  @keyframes x {
    0%{
      margin-top: -1000px;
    }
    100% {
      margin-top: 0px;
    }
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 992px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .menu-item + .menu-item {
    margin-left: 5rem;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #61dafb;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const NavItem = styled(Link)`
  margin: 0 15px;
  text-decoration: none;
  color: #282c34;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/projects">Projects</NavItem>
    </NavbarContainer>
  );
};

export default Navbar;
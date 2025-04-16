import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #f4f4f4;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Header = () => (
  <Nav>
    <Logo>Little Lemon</Logo>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/booking">Book</NavLink>
    </div>
  </Nav>
);

export default Header;
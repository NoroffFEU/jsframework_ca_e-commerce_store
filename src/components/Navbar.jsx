import React from 'react';
import styled from 'styled-components';

const primaryColor = '#1a1a2e';
const textColor = '#fff';
const linkHoverColor = '#007bff';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${primaryColor};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: ${textColor};
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const commonLinkStyles = `
  margin: 0 10px;
  color: ${textColor};
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${linkHoverColor};
  }
`;

const NavLink = styled.a`
  ${commonLinkStyles}
`;

const SearchBar = styled.input`
  border: none;
  padding: 10px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo>E-Commerce Store</Logo>
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Product</NavLink>
        <NavLink href="#">Cart</NavLink>
        <NavLink href="#">Checkout</NavLink>
        <SearchBar type="text" placeholder="Search" />
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;

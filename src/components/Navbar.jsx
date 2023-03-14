import React from 'react';
import styled from 'styled-components';

const primaryColor = '#1a1a2e';
const textColor = '#fff';
const linkHoverColor = '#007bff';

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${primaryColor};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Logo = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: ${textColor};
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const commonLinkStyles = `
  margin: 0.5rem;
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

  @media screen and (min-width: 768px) {
    margin-left: 1rem;
  }
`;

const SearchBar = styled.input`
  border: none;
  padding: 10px;
  font-size: 16px;
  margin-top: 1rem;

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-left: 1rem;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo>E-Com</Logo>
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Product</NavLink>
        <NavLink href="#">Cart</NavLink>
        <NavLink href="#">Checkout</NavLink>
      </NavLinks>
      <SearchBar type="text" placeholder="Search" />
    </NavbarContainer>
  );
}

export default Navbar;

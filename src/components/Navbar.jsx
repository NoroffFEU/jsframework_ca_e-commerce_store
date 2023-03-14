import React, { useState } from 'react';
import styled from 'styled-components';

const textColor = '#fff';
const linkHoverColor = '#007bff';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: blue;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const commonLinkStyles = `
  margin: 0 0.5rem;
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

  @media screen and (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const SearchBar = styled.input`
  height: 30px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  width: 550px;
`;

const SearchButton = styled.button`
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: ${linkHoverColor};
  color: ${textColor};
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #0062cc;
  }
`;

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Send a request to the API with the search term as a filter
    fetch(`https://api.noroff.dev/api/v1/online-shop/items?category=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <NavbarContainer>
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Product</NavLink>
        <NavLink href="#">Cart</NavLink>
        <NavLink href="#">Checkout</NavLink>
      </NavLinks>
      <div>
        <SearchBar
          type="text"
          placeholder="Search category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;

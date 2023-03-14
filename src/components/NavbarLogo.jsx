import React from 'react';
import styled from 'styled-components';

const primaryColor = '#1a1a2e';

const NavbarContainer = styled.div`
 
   background-color: ${primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const Logo = styled.h1`
  color: white;
  font-size: 24px;
  text-align: center;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

function NavbarLogo() {
  return (
    <NavbarContainer>
      <Logo>E-Commerce Store</Logo>
    </NavbarContainer>
  );
}

export default NavbarLogo;

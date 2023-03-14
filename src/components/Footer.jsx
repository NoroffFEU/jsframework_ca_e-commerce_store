import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const FooterHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FooterText = styled.p`
  font-size: 16px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterHeader>E-Commerce Store</FooterHeader>
      <FooterText>123 Main St, Anytown USA</FooterText>
      <FooterText>info@ecommercestore.com</FooterText>
    </FooterContainer>
  );
}

export default Footer;

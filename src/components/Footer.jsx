import React from 'react';
import styled from 'styled-components';

const primaryColor = '#1a1a2e';

const FooterContainer = styled.div`
  background-color: ${primaryColor};
  color: white;
  padding: 10px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

const FooterText = styled.p`
  font-size: 16px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>React. E-Commerce Store Design by: NeNorvalls2023</FooterText>
    </FooterContainer>
  );
};

export default Footer;

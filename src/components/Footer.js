import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  padding: 10px;
  color: white;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2025 Your Name. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
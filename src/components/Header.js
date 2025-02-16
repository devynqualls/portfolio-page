import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Welcome to My Portfolio</h1>
    </HeaderContainer>
  );
};

export default Header;
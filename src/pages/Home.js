import React from 'react';
import styled from 'styled-components';
import homeImage from '../assets/images/58799637.png';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
  border-radius: 8px;
  margin-top: 20px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Home Page</h1>
      <p>Welcome to my portfolio website. Here you can find information about me and my projects.</p>
      <Image src={homeImage} alt="Home" />
    </HomeContainer>
  );
};

export default Home;
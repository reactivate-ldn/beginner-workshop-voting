import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import Container from './components/Container';
import Title from './components/Title';
import reactLogo from './assets/react.svg';

const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  text-align: center;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Image = styled.div`
  margin: 0 auto;
  width: 20rem;
  height: 20rem;
  background-image: url(${reactLogo});
  background-size: contain;
  background-repeat: no-repeat;
  animation: 9s linear ${rotate} infinite;
`;

class Welcome extends Component {
  render() {
    return (
      <Container>
        <Title>
          Welcome to the React Workshop!
        </Title>

        <Image/>

        <SubTitle>
          Start by searching the code for TODO comments. Have fun!
        </SubTitle>
      </Container>
    );
  }
}

export default Welcome;

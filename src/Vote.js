import React, { Component } from 'react';

import Container from './components/Container';
import Title from './components/Title';
import Chart from './components/chart';
import Voting from './components/Voting';

class App extends Component {
  render() {
    return (
      <Container>
        <Title>Which is your favourite JS front-end library?</Title>
        <Chart/>
        <Voting/>
      </Container>
    );
  }
}

export default App;

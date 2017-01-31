import React, { Component } from 'react';

import Container from './components/Container';
import Title from './components/Title';
import Chart from './components/chart';

class App extends Component {
  render() {
    return (
      <Container>
        <Title>Which is your favourite JS front-end library?</Title>
        <Chart/>
      </Container>
    );
  }
}

export default App;

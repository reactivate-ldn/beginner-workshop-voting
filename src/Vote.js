import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPoll } from './actions/poll';
import { pollId } from './constants/poll';

import Container from './components/Container';
import Title from './components/Title';
import Chart from './components/chart';
import Voting from './components/Voting';

class App extends Component {

  componentWillMount() {
    this.props.getPoll(pollId);
  }

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

export default connect(null, dispatch => ({
  getPoll: pollId => getPoll(pollId)(dispatch)
}))(App);

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
    const { poll } = this.props;
    if (!poll) {
      return null;
    }

    return (
      <Container>
        <Title>{poll.title}</Title>
        <Chart answers={poll.answer}/>
        <Voting/>
      </Container>
    );
  }
}

export default connect((state, props) => ({
  poll: state.polls[pollId]
}), dispatch => ({
  getPoll: pollId => getPoll(pollId)(dispatch)
}))(App);

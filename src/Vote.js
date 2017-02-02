import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPoll, addVote } from './actions/poll';
import { pollId } from './constants/poll';

import Container from './components/Container';
import Title from './components/Title';
import Chart from './components/chart';
import Voting from './components/Voting';

class App extends Component {

  componentWillMount() {
    this.props.getPoll(pollId);
  }

  onClick = (answerId) => {
    this.props.addVote(pollId, answerId);
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
        <Voting answers={poll.answer} onClick={this.onClick}/>
      </Container>
    );
  }
}

export default connect((state, props) => ({
  poll: state.polls[pollId]
}), dispatch => ({
  getPoll: pollId => getPoll(pollId)(dispatch),
  addVote: (pollId, answerId) => addVote(pollId, answerId)(dispatch)
}))(App);

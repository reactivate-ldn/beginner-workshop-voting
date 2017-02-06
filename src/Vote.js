import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPoll, addVote } from './actions/poll';
import { pollId } from './constants/poll';

import Container from './components/Container';
import Title from './components/Title';
import Chart from './components/chart';
import Voting from './components/Voting';

class App extends Component {
  onClick = answerId => {
    this.props.addVote(pollId, answerId);
  };

  componentDidMount() {
    this.props.getPoll(pollId);
  }

  render() {
    const { poll } = this.props;

    if (!poll) {
      return null;
    }

    return (
      <Container>
        <Title>
          {poll.title}
        </Title>

        <Chart answers={poll.answer}/>

        <Voting
          answers={poll.answer}
          onClick={this.onClick}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  poll: state.polls[pollId]
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getPoll: pollId => getPoll(pollId),
  addVote: (pollId, answerId) => addVote(pollId, answerId)
})(dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

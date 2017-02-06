import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPoll, addVote } from './actions/poll';

import Container from './components/Container';
import Title from './components/Title';
import BarChart from './components/BarChart';
import Voting from './components/Voting';

class App extends Component {
  // TODO: Add `onClick` handler
  // TODO: Execute `getPoll` on mount

  render() {
    const { poll } = this.props;

    if (!poll) {
      // TODO: Add a nice loading screen / message
      return null;
    }

    return (
      <Container>
        <Title>
          {poll.title}
        </Title>

        <BarChart answers={poll.answer}/>

        <Voting
          answers={poll.answer}
          onClick={undefined}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  // TODO: Add `poll` from `state`
})

const mapDispatchToProps = dispatch => bindActionCreators({
  // TODO: Add `getPoll` action creator
  // TODO: Add `addVote` action creator
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

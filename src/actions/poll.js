import config from '../config.json';
import { SET_POLL } from '../constants/poll';

const setPoll = (payload) => ({
  type: SET_POLL,
  payload
});

const req = (url, body, method = 'GET') => new Request(url, {
  method,
  headers: new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8',
  }),
  body,
});


export const getPoll = pollId => dispatch => (
  fetch(`${config.url}/poll?pollId=${pollId}`)
  .then(res => res.json())
  .then(poll => dispatch(setPoll(poll)))
);

export const addVote = (pollId, answerId) => dispatch => (
  fetch(req(`${config.url}/poll/vote`, JSON.stringify({
    pollId,
    answerId
  }), 'POST'))
  .then(res => res.json())
  .then(poll => dispatch(setPoll(poll)))
);

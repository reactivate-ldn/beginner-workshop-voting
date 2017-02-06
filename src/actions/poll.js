import {
  API_URL,
  POLL_ID,
  SET_POLL
} from '../constants/poll';

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

export const getPoll = pollId => dispatch => {
  fetch(`${API_URL}/poll?pollId=${POLL_ID}`)
    .then(res => res.json())
    .then(poll => dispatch(setPoll(poll)));
};

export const addVote = answerId => dispatch => {
  fetch(req(`${API_URL}/poll/vote`, JSON.stringify({
    pollId: POLL_ID,
    answerId
  }), 'POST'))
    .then(res => res.json())
    .then(poll => dispatch(setPoll(poll)));
};

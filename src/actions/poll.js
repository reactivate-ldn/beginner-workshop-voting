import {
  API_URL,
  POLL_ID,
  SET_POLL
} from '../constants/poll';

// TODO: Add action creator for `SET_POLL` action type
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

// TODO: Add thunk creator for `getPoll`
export const getPoll = () => (dispatch) => {
  fetch(`${API_URL}/poll?pollId=1234`)
    .then((result) => result.json())
    .then((poll) => dispatch(setPoll(poll)))
};

// TODO: Add thunk creator for `addVote`
export const addVote = () => null;

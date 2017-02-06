import {
  API_URL,
  POLL_ID,
  SET_POLL
} from '../constants/poll';

// TODO: Add action creator for `SET_POLL` action type
const setPoll = () => null;

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
export const getPoll = () => null;

// TODO: Add thunk creator for `addVote`
export const addVote = () => null;

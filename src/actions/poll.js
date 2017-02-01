import config from '../config.json';
import { SET_POLL } from '../constants/poll';

const setPoll = (payload) => ({
  type: SET_POLL,
  payload
});

export const getPoll = (pollId) => dispatch => (
  fetch(`${config.url}/polls/${pollId}`)
  .then(res => res.json())
  .then(poll => dispatch(setPoll(poll)))
);

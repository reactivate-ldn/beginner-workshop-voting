import { SET_POLL } from '../constants/poll';

export default function pollReducer(state = null, action) {
  const { type, payload } = action;

  switch (type) {
    // TODO: Add a case for `SET_POLL`
    default: return state;
  }
}

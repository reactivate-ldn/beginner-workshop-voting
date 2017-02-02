import { SET_POLL } from '../constants/poll';

export default function reduce(state = {}, action) {
  const { type, payload } = action;
  switch(type) {
    case SET_POLL:
      state[payload.id] = payload;
      return { ...state };
    default:
      return state;
  }
}

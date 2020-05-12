import { START_TIMER } from '../actions/timerActions';

const initialState = {
  time: 0
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case START_TIMER:
      state.time = state.time + action.payload;
      return state;
    default:
      return state;
  }
}

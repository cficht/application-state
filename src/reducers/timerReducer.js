import { START_TIMER, COUNT_DOWN } from '../actions/timerActions';

const initialState = {
  count: 0
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case START_TIMER:
      state.count = action.payload;
      return state;
    case COUNT_DOWN:
      state.count--;
      return state;
    default:
      return state;
  }
}

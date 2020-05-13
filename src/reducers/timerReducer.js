import { START_TIMER, COUNT_DOWN, TIMER_START_OFF } from '../actions/timerActions';

const initialState = {
  count: 0,
  timerStart: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case START_TIMER:
      state.count = action.payload;
      state.timerStart = true;
      return state;
    case COUNT_DOWN:
      if(state.count > 0) {
        state.count--;
      } else {
        window.clearInterval(action.payload);
      }
      return state;
    case TIMER_START_OFF:
      state.timerStart = false;
      return state;
    default:
      return state;
  }
}

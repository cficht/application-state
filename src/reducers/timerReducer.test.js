import { startTimer } from '../actions/timerActions';
import reducer from './timerReducer';

describe('timerReducer testing', () => {
  it('handles the START_TIMER action', () => {
    const state = {
      time: 0,
    };
    const action = startTimer(60);
    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      time: 60
    });
  });
});

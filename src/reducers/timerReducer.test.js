import { startTimer, countDown } from '../actions/timerActions';
import reducer from './timerReducer';

describe('timerReducer testing', () => {
  it('handles the START_TIMER action', () => {
    const state = {
      count: 0,
    };
    const action = startTimer(60);
    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      count: 60
    });
  });

  it('handles the COUNT_DOWN action', () => {
    const state = {
      count: 29,
    };
    const action = countDown();
    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      count: 28
    });
  });
});

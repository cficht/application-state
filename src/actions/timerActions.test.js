import { startTimer, START_TIMER } from './timerActions';

describe('timerActions tests', () => {
  it('creates a start timer action', () => {
    const action = startTimer(10);

    expect(action).toEqual({
      type: START_TIMER,
      payload: 10
    });
  });
});

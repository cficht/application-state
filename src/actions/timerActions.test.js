import { startTimer, START_TIMER, countDown, COUNT_DOWN } from './timerActions';

describe('timerActions tests', () => {
  it('creates a start timer action', () => {
    const action = startTimer(10);

    expect(action).toEqual({
      type: START_TIMER,
      payload: 10
    });
  });

  it('creates a count down action', () => {
    const action = countDown();

    expect(action).toEqual({
      type: COUNT_DOWN
    });
  });
});

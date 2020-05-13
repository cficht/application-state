import { startTimer, START_TIMER, countDown, COUNT_DOWN, timerStartOff, TIMER_START_OFF } from './timerActions';

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

  it('creates a timer start off action', () => {
    const action = timerStartOff();

    expect(action).toEqual({
      type: TIMER_START_OFF
    });
  });
});

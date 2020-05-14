import { isTiming, getTime, getTimerStart } from './timerSelectors';

describe('timerSelectors testing', () => {
  it('returns true if timer is above 0', () => {
    const state = 
    {
      time: 
      {
        count: 10
      }
    };
    const time = isTiming(state);

    expect(time).toEqual(true);
  });

  it('returns false if timer is below 1', () => {
    const state = 
    {
      time: 
      {
        count: 0
      }
    };
    const time = isTiming(state);

    expect(time).toEqual(false);
  });

  it('returns the current time', () => {
    const state = 
    {
      time: 
      {
        count: 40
      }
    };
    const time = getTime(state);

    expect(time).toEqual(40);
  });

  it('returns true for the timer starting', () => {
    const state = 
    {
      time: 
      {
        timerStart: true
      }
    };
    const time = getTimerStart(state);

    expect(time).toEqual(true);
  });

});

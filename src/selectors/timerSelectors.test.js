import { isTiming } from './timerSelectors';

describe('timerSelectors testing', () => {
  it('returns true if timer is above 0', () => {
    const state = {
      time: 10
    };
    const time = isTiming(state);

    expect(time).toEqual(true);
  });

  it('returns false if timer is below 1', () => {
    const state = {
      time: 0
    };
    const time = isTiming(state);

    expect(time).toEqual(false);
  });

});

import { getTired } from './moodsSelectors';

describe('moodsSelectors testing', () => {
  it('returns true if coffees and naps are less than 1', () => {
    const state = {
      coffees: 0,
      snacks: 5,
      naps: 0,
      studies: 10
    };
    const tired = getTired(state);

    expect(tired).toEqual(true);
  });

  it('returns false if coffees or naps are greater than 1', () => {
    const state = {
      coffees: 0,
      snacks: 5,
      naps: 1,
      studies: 10
    };
    const tired = getTired(state);

    expect(tired).toEqual(false);
  });
});

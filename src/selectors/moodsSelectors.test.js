import { getTired, getHyper, getEducated, getHungry } from './moodsSelectors';

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

  it('returns true if coffees are greater than 3', () => {
    const state = {
      coffees: 5,
      snacks: 2,
      naps: 2,
      studies: 2
    };
    const hyper = getHyper(state);

    expect(hyper).toEqual(true);
  });

  it('returns false if coffees are less than 3', () => {
    const state = {
      coffees: 2,
      snacks: 2,
      naps: 2,
      studies: 2
    };
    const hyper = getHyper(state);

    expect(hyper).toEqual(false);
  });

  it('returns true if studies are greater than 2', () => {
    const state = {
      coffees: 5,
      snacks: 2,
      naps: 2,
      studies: 5
    };
    const educated = getEducated(state);

    expect(educated).toEqual(true);
  });

  it('returns false if studies are less than 2', () => {
    const state = {
      coffees: 2,
      snacks: 2,
      naps: 2,
      studies: 1
    };
    const educated = getEducated(state);

    expect(educated).toEqual(false);
  });

  it('returns true if snacks are less than 1', () => {
    const state = {
      coffees: 5,
      snacks: 0,
      naps: 2,
      studies: 5
    };
    const hungry = getHungry(state);

    expect(hungry).toEqual(true);
  });

  it('returns false if snacks are greater than 1', () => {
    const state = {
      coffees: 2,
      snacks: 6,
      naps: 2,
      studies: 1
    };
    const hungry = getHungry(state);

    expect(hungry).toEqual(false);
  });
});

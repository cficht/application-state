import { drinkCoffee, DRINK_COFFEE } from './moodsActions';

describe('moodsActions testing', () => {
  it('creates an drink coffee function', () => {
    const action = drinkCoffee();

    expect(action).toEqual({
      type: DRINK_COFFEE
    });
  });
});

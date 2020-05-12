import { drinkCoffee, DRINK_COFFEE, eatSnack, EAT_SNACK } from './moodsActions';

describe('moodsActions testing', () => {
  it('creates a drink coffee function', () => {
    const action = drinkCoffee();

    expect(action).toEqual({
      type: DRINK_COFFEE
    });
  });

  it('creates a eat snack function', () => {
    const action = eatSnack();

    expect(action).toEqual({
      type: EAT_SNACK
    });
  });
});

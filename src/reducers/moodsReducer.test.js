import { drinkCoffee, eatSnack } from '../actions/moodsActions';
import reducer from './moodsReducer';

describe('moodsReducer testing', () => {
  it('handles the DRINK_COFFEE action', () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    const action = drinkCoffee();
    const newState = reducer(state, action);

    expect(newState).toEqual({
      coffees: 1,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });

  it('handles the EAT_SNACK action', () => {
    const state = {
      coffees: 1,
      snacks: 2,
      naps: 2,
      studies: 3
    };
    const action = eatSnack();
    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      coffees: 1,
      snacks: 3,
      naps: 2,
      studies: 3
    });
  });
});

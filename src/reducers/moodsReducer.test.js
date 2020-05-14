import { drinkCoffee, eatSnack, takeNap, study, reset } from '../actions/moodsActions';
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

  it('handles the TAKE_NAP action', () => {
    const state = {
      coffees: 5,
      snacks: 6,
      naps: 1,
      studies: 2
    };
    const action = takeNap();
    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      coffees: 5,
      snacks: 6,
      naps: 2,
      studies: 2
    });
  });

  it('handles the STUDY action', () => {
    const state = {
      coffees: 10,
      snacks: 1,
      naps: 0,
      studies: 10
    };
    const action = study();
    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      coffees: 10,
      snacks: 1,
      naps: 0,
      studies: 11
    });
  });

  it('handles the RESET action', () => {
    const state = {
      coffees: 10,
      snacks: 1,
      naps: 0,
      studies: 10
    };
    const action = reset();
    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });
});

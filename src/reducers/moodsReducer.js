import { DRINK_COFFEE } from '../actions/moodsActions';

const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case DRINK_COFFEE:
      return { 
        ...state, 
        coffees: state.coffees + 1 
      };
    default:
      return state;
  }
}

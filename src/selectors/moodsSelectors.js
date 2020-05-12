export const getTired = state => state.coffees < 1 && state.naps < 1;
export const getHyper = state => state.coffees > 3;
export const getEducated = state => state.studies > 2;
export const getHungry = state => state.snacks < 1;

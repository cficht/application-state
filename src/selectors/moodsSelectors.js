export const getTired = state => state.coffees < 1 && state.naps < 1;
export const getHyper = state => state.coffees > 3;
export const getEducated = state => state.studies > 2;
export const getHungry = state => state.snacks < 1;

export const whichFace = state => {
  if(getTired(state) && getHungry(state)) return '🤬';
  if(getHyper(state) && getHungry(state)) return '🤮';
  if(getTired(state)) return '😴';
  if(getHyper(state)) return '🙀';
  if(getEducated(state)) return '🤯';
  if(getHungry(state)) return '😡';
  return '😀';
};

export const getEmotion = state => state;

export const getEmotion = state => state.moods;
export const getTired = state => state.moods.coffees < 1 && state.moods.naps < 1;
export const getHyper = state => state.moods.coffees > 3;
export const getEducated = state => state.moods.studies > 2;
export const getHungry = state => state.moods.snacks < 1;

export const whichFace = state => {
  if(getTired(state) && getHungry(state)) return '🤬';
  if(getHyper(state) && getHungry(state)) return '🤮';
  if(getTired(state)) return '😴';
  if(getHyper(state)) return '🙀';
  if(getEducated(state)) return '🤯';
  if(getHungry(state)) return '😡';
  return '😀';
};



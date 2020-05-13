export const START_TIMER = 'START_TIMER';
export const startTimer = (time) => ({
  type: START_TIMER,
  payload: time
});

export const COUNT_DOWN = 'COUNT_DOWN';
export const countDown = () => ({
  type: COUNT_DOWN
});

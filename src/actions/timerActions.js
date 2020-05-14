export const START_TIMER = 'START_TIMER';
export const startTimer = (time) => ({
  type: START_TIMER,
  payload: time
});

export const COUNT_DOWN = 'COUNT_DOWN';
export const countDown = (intervalId) => ({
  type: COUNT_DOWN,
  payload: intervalId
});

export const TIMER_START_OFF = 'TIMER_START_OFF';
export const timerStartOff = () => ({
  type: TIMER_START_OFF
});

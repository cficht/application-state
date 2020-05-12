export const START_TIMER = 'START_TIMER';
export const startTimer = (countdown) => ({
  type: START_TIMER,
  payload: countdown
});

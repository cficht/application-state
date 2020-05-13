import { combineReducers } from 'redux';
import moods from './moodsReducer';
import time from './timerReducer';

export default combineReducers({
  moods: moods,
  time: time
});

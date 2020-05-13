import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Controls from '../controls/Controls';
import Face from '../face/Face';
import Timer from '../Timer/Timer';
import { drinkCoffee, eatSnack, takeNap, study, reset } from '../../actions/moodsActions';
import { whichFace, getEmotion } from '../../selectors/moodsSelectors';
import { startTimer, countDown, timerStartOff } from '../../actions/timerActions';
import { isTiming, getTimerStart } from '../../selectors/timerSelectors';
import styles from './Moods.css';

const Moods = () => {
  const dispatch = useDispatch();
  const emotion = useSelector(getEmotion);
  const face = useSelector(whichFace);
  const timing = useSelector(isTiming);
  const timerStart = useSelector(getTimerStart);
  let countHandler;
  
  if(timerStart) {
    dispatch(timerStartOff());
    countHandler = setInterval(() => {
      dispatch(countDown(countHandler));
    }, 1000); 
  } 
  if(!timing) {
    dispatch(reset());
  }

  const displayMode = (timing) => {
    if(timing) {
      return (
        <>
          <Controls>
            <button onClick={() => dispatch(drinkCoffee())}>coffee - {emotion.coffees}</button>
            <button onClick={() => dispatch(eatSnack())}>snacks - {emotion.snacks}</button>
            <button onClick={() => dispatch(takeNap())}>naps - {emotion.naps}</button>
            <button onClick={() => dispatch(study())}>studies - {emotion.studies}</button>
          </Controls >
          <Face emoji={face}/>
          <Timer />
        </>
      );
    } else {
      return (
        <section className={styles.Moods}>
          <button onClick={() => dispatch(startTimer(10))}>Start</button>
        </section>
      );
    }
  };
  
  return (
    <>
      {displayMode(timing)}
    </>
  );
};

export default Moods;

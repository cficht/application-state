import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Controls from '../controls/Controls';
import Face from '../face/Face';
import { drinkCoffee, eatSnack, takeNap, study } from '../../actions/moodsActions';
import { whichFace, getEmotion } from '../../selectors/moodsSelectors';
import { isTiming } from '../../selectors/timerSelectors';
import { startTimer } from '../../actions/timerActions';

const Moods = () => {
  const dispatch = useDispatch();
  const emotion = useSelector(getEmotion);
  const face = useSelector(whichFace);
  const timing = useSelector(isTiming);

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
        </>
      );
    } else {
      return (
        <button onClick={() => dispatch(startTimer(10))}>Start</button>
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

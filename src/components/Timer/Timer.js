import React from 'react';
import { useSelector } from 'react-redux';
import { getTime } from '../../selectors/timerSelectors';

const Timer = () => {
  const time = useSelector(getTime);

  return (
    <>
      <h1>{time}</h1>
    </>
  );
};

export default Timer;

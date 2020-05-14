import React from 'react';
import { useSelector } from 'react-redux';
import { getTime } from '../../selectors/timerSelectors';
import styles from './Timer.css';

const Timer = () => {
  const time = useSelector(getTime);

  return (
    <section className={styles.Timer}>
      <h1>{time}</h1>
    </section>
  );
};

export default Timer;

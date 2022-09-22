import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

const Timer = ({ setCompletedTime, setUserTime }) => {
  const { gameover, isGameStarted } = useContext(GameContext);

  const [time, setTime] = useState();
  const [stateHours, setstateHours] = useState(0);
  const [stateMinutes, setstateMinutes] = useState(0);
  const [stateSeconds, setstateSeconds] = useState(0);
  const [stateMilliseconds, setMilliSeconds] = useState(0);

  useEffect(() => {
    if (gameover) {
      stopTimer();
      return;
    }
    if (isGameStarted) {
      startTimer();
      return;
    }
  }, [isGameStarted, gameover]);

  const setTimer = () => {
    setstateSeconds((prev) => prev + 1);
    setMilliSeconds((prev) => prev + 1000);

    if (stateSeconds === 59) {
      setstateSeconds(0);
      setstateMinutes((prev) => prev + 1);
      return;
    }
    if (stateMinutes === 59) {
      setstateMinutes(0);
      setstateSeconds(0);
      setstateHours((prev) => prev + 1);
      return;
    }
  };

  const stopTimer = () => {
    setUserTime(stateMilliseconds);
    setCompletedTime(`${stateHours}hr ${stateMinutes}min ${stateSeconds}sec`);
    clearInterval(time);
  };

  const startTimer = () => {
    setTime(setInterval(setTimer, 1000));
  };

  return (
    <div className="timer">
      <p id="time">
        Timer: {stateHours} hours: {stateMinutes} minutes : {stateSeconds}{' '}
        seconds
      </p>
    </div>
  );
};

export default Timer;

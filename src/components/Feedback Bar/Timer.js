import React, { useEffect, useState } from 'react';

const Timer = ({ isGameStarted, gameover }) => {
  const [time, setTime] = useState();

  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  useEffect(() => {
    if (gameover) {
      stopTimer();
      return;
    }
    if (isGameStarted) {
      startTimer();
      return;
    }
  }, [seconds, isGameStarted, gameover]);

  const setTimer = () => {
    seconds++;
    const time = document.querySelector('#time');
    time.innerText = `Timer: ${hours} hours: ${minutes} minutes : ${seconds} seconds`;

    if (seconds === 59) {
      seconds = 0;
      minutes++;
      return;
    }
    if (minutes === 59) {
      hours++;
      minutes = 0;
      seconds = 0;
      return;
    }
  };

  const stopTimer = () => {
    clearInterval(time);
  };

  const startTimer = () => {
    setTime(setInterval(setTimer, 1000));
  };

  return (
    <div className="timer">
      <p id="time">
        Timer: {hours} hours: {minutes} minutes : {seconds} seconds
      </p>
    </div>
  );
};

export default Timer;

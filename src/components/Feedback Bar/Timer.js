import React, { useEffect } from 'react';

const Timer = () => {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  useEffect(() => {}, [seconds]);

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

  const time = setInterval(setTimer, 1000);

  return (
    <div className="timer">
      <p id="time">
        Timer: {hours} hours: {minutes} minutes : {seconds} seconds
      </p>
    </div>
  );
};

export default Timer;

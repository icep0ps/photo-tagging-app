import React, { useEffect } from 'react';

const StartScreen = ({ startGame, isGameStarted }) => {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflowY = 'hidden';
  }, []);

  const showStartScreen = (
    <div className="start-screen">
      <h1>Find the characters</h1>
      <button onClick={startGame}>Start Game</button>
    </div>
  );

  return isGameStarted ? '' : showStartScreen;
};

export default StartScreen;

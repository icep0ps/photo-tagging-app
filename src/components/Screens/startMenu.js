import React, { useEffect } from 'react';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

const StartScreen = () => {
  const { gameover, isGameStarted, setIsGameStarted } = useContext(GameContext);

  const startGame = () => {
    const body = document.querySelector('body');
    body.style.overflowY = 'scroll';
    setIsGameStarted(true);
  };

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
  if (gameover) {
    return;
  }

  if (!isGameStarted) {
    return showStartScreen;
  }
};

export default StartScreen;

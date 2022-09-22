import { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameover, setGameover] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <GameContext.Provider
      value={{ gameover, isGameStarted, setGameover, setIsGameStarted }}
    >
      {children}
    </GameContext.Provider>
  );
};

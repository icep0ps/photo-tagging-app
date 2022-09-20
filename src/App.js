import Nav from './components/Nav';
import React, { useEffect, useState } from 'react';
import StartScreen from './components/startMenu';
import Leaderboard from './components/Leaderboard';
import Photo from './components/Tagging/Photo';
import Notification from './components/Tagging/Notification';
import FeedbackBar from './components/Feedback Bar/feedback-bar';
import './App.css';

function App() {
  const [gameover, setGameover] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [toggleLeaderboard, setToggleLeaderbaord] = useState(false);

  const startGame = () => {
    const body = document.querySelector('body');
    body.style.overflowY = 'scroll';
    setIsGameStarted(true);
  };

  useEffect(() => {}, [toggleLeaderboard]);

  return (
    <div className="App">
      <StartScreen
        startGame={startGame}
        isGameStarted={isGameStarted}
      ></StartScreen>
      <Nav
        toggleLeaderboard={toggleLeaderboard}
        setToggleLeaderbaord={setToggleLeaderbaord}
      />
      <FeedbackBar isGameStarted={isGameStarted} gameover={gameover} />
      <Photo
        setIsGameStarted={setIsGameStarted}
        isGameStarted={isGameStarted}
        setGameover={setGameover}
      >
        <Notification />
      </Photo>
      {toggleLeaderboard && !isGameStarted ? (
        <Leaderboard toggle={toggleLeaderboard} />
      ) : (
        ''
      )}
    </div>
  );
}

export default App;

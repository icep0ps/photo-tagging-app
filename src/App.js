import './App.css';
import Nav from './components/Nav';
import Photo from './components/Tagging/Photo';
import React, { useEffect, useState } from 'react';
import { GameProvider } from './context/GameContext';
import StartScreen from './components/Screens/startMenu';
import Leaderboard from './components/Screens/Leaderboard';
import Notification from './components/Tagging/Notification';
import FeedbackBar from './components/Feedback Bar/feedback-bar';
import GameoverScreen from './components/Screens/GameoverScreen';

function App() {
  const [userTime, setUserTime] = useState('');
  const [completedTime, setCompletedTime] = useState('');
  const [toggleLeaderboard, setToggleLeaderbaord] = useState(false);

  useEffect(() => {
    console.log(toggleLeaderboard);
  }, [toggleLeaderboard]);

  return (
    <div className="App">
      <GameProvider>
        <StartScreen />
        <GameoverScreen completedTime={completedTime} userTime={userTime} />
        <Nav
          toggleLeaderboard={toggleLeaderboard}
          setToggleLeaderbaord={setToggleLeaderbaord}
        />
        <FeedbackBar
          setUserTime={setUserTime}
          setCompletedTime={setCompletedTime}
        />
        <Photo>
          <Notification />
        </Photo>
        {toggleLeaderboard ? <Leaderboard /> : false}
      </GameProvider>
    </div>
  );
}

export default App;

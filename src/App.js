import Nav from './components/Nav';
import React, { useEffect, useState } from 'react';
import Leaderboard from './components/Leaderboard';
import Photo from './components/Tagging/Photo';
import Notification from './components/Tagging/Notification';
import FeedbackBar from './components/Feedback Bar/feedback-bar';
import './App.css';

function App() {
  const [toggleLeaderboard, setToggleLeaderbaord] = useState(false);
  useEffect(() => {
    console.log('render');
  }, [toggleLeaderboard]);

  return (
    <div className="App">
      <Nav
        toggleLeaderboard={toggleLeaderboard}
        setToggleLeaderbaord={setToggleLeaderbaord}
      />
      <FeedbackBar />
      <Photo>
        <Notification />
      </Photo>
      {toggleLeaderboard ? <Leaderboard toggle={toggleLeaderboard} /> : ''}
    </div>
  );
}

export default App;

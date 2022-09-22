import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

function GameoverScreen({ completedTime, userTime }) {
  const [username, setUsername] = useState('');
  const { gameover } = useContext(GameContext);
  const LeaderbaordRef = collection(db, 'leaderboard');

  const UserData = {
    username: username,
    time: userTime,
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const addUserToLeaderboard = async () => {
    await addDoc(LeaderbaordRef, UserData);
  };

  const submitTimer = (event) => {
    addUserToLeaderboard();
    event.preventDefault();
    event.target.value = '';
  };

  const showGameoverScreen = (
    <div className="gameover">
      <h1>You Found Them All!</h1>
      <p>You took {completedTime} to find the characters</p>
      <p>Enter a username to submit your time</p>

      <form onSubmit={submitTimer}>
        <label>Username</label>
        <input
          placeholder="Enter your username"
          type="text"
          onChange={handleChange}
        ></input>
        <button>Submit Score</button>
      </form>
    </div>
  );
  return gameover ? showGameoverScreen : '';
}

export default GameoverScreen;

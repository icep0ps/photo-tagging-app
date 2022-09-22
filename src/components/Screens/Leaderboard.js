import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const Leaderboard = () => {
  const [leaderboard, setLeaderBoard] = useState([]);
  const LeaderboardRef = collection(db, 'leaderboard');

  const convertTime = (time) => {
    let seconds = Math.floor(time / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;
    return `${hours}hr ${minutes}mins ${seconds}seconds`;
  };

  useEffect(() => {
    const getLeaderboard = async () => {
      const LeaderboardData = await getDocs(LeaderboardRef);
      const convertData = LeaderboardData.docs.map((doc) => doc.data());
      const sortTimes = convertData.sort((a, b) => a.time - b.time);
      const convertTimes = sortTimes.map((entry) => {
        return { ...entry, time: convertTime(entry.time) };
      });
      setLeaderBoard(convertTimes);
    };
    getLeaderboard();
  }, []);

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <ol>
        {leaderboard.map((entry, index) => {
          return (
            <li>
              {index + 1}.{entry.username} <span>{entry.time}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Leaderboard;

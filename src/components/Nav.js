import React from 'react';

const Nav = ({ setToggleLeaderbaord, toggleLeaderboard }) => {
  const showLeaderboadr = () => {
    setToggleLeaderbaord(!toggleLeaderboard);
  };
  return (
    <nav>
      <h1>Find the charators</h1>
      <ul>
        <li onClick={showLeaderboadr}>Leaderboards</li>
        <li>Github</li>
      </ul>
    </nav>
  );
};

export default Nav;

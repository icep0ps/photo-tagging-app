import React, { useState } from 'react';
import CharacterSelect from './CharacterSelect';

const Photo = ({ isGameStarted, setGameover, setIsGameStarted }) => {
  const targetFactory = (name, top, bottom, left, right) => {
    return {
      id: name,
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      isFound: false,
    };
  };

  const sky = targetFactory(
    'sky',
    16.19697419163453,
    17.798872738059924,
    45.27896995708154,
    48.497854077253216
  );

  const bird = targetFactory(
    'bird',
    49.89617324236132,
    51.61673094037378,
    16.630901287553648,
    19.15236051502146
  );

  const wipeout = targetFactory(
    'wipeout',
    85.1972708395135,
    87.71877781073866,
    69.47424892703863,
    73.92703862660944
  );

  const [skyState, setSkyState] = useState(sky);
  const [birdState, setBirdState] = useState(bird);
  const [wipeoutState, setWipeoutState] = useState(wipeout);
  const [characters, setCharacters] = useState([
    skyState,
    birdState,
    wipeoutState,
  ]);

  const [userClick, setUserClick] = useState(false);
  const [usersX, setUsersX] = useState();
  const [usersY, setUsersY] = useState();

  const handleClick = (event) => {
    const photoHeight = document.querySelector('.photo').offsetHeight;
    const photoWidth = document.querySelector('.photo').offsetWidth;

    const usersX = event.nativeEvent.offsetX;
    const usersY = event.nativeEvent.offsetY;
    const calculatedX = (usersY / photoHeight) * 100;
    const calculatedY = (usersX / photoWidth) * 100;

    setUsersX(calculatedX);
    setUsersY(calculatedY);
    setUserClick(!userClick);
  };

  return (
    <div className="photo">
      <div className="target"></div>
      {userClick && isGameStarted ? (
        <CharacterSelect
          usersX={usersX}
          usersY={usersY}
          handleuserClick={setUserClick}
          userClick={userClick}
          characters={characters}
          bird={birdState}
          sky={skyState}
          wipeout={wipeoutState}
          setCharacters={setCharacters}
          setGameover={setGameover}
          setIsGameStarted={setIsGameStarted}
        ></CharacterSelect>
      ) : (
        ''
      )}
      <img
        src={require('../../img/bczqo5kyc3641.png')}
        alt=""
        onClick={handleClick}
      />
    </div>
  );
};

export default Photo;

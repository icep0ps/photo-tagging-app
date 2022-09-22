import React, { useEffect, useState } from 'react';
import CharacterSelect from './CharacterSelect';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

const Photo = () => {
  const { isGameStarted } = useContext(GameContext);

  const skyRef = doc(db, 'characters', 'sky');
  const birdRef = doc(db, 'characters', 'bird');
  const wipeoutRef = doc(db, 'characters', 'wipeout');

  const [skyState, setSkyState] = useState({});
  const [birdState, setBirdState] = useState({});
  const [wipeoutState, setWipeoutState] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const sky = await getDoc(skyRef);
      const bird = await getDoc(birdRef);
      const wipeout = await getDoc(wipeoutRef);

      setSkyState(sky.data());
      setBirdState(bird.data());
      setWipeoutState(wipeout.data());
      setCharacters([sky.data(), bird.data(), wipeout.data()]);
    };

    getCharacters();
  }, []);

  const [usersX, setUsersX] = useState();
  const [usersY, setUsersY] = useState();
  const [userClick, setUserClick] = useState(false);

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
        />
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

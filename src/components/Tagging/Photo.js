/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import CharacterSelect from './CharacterSelect';
import { useContext, useEffect, useRef } from 'react';
import useGetCharacters from './hooks/useGetCharactors';
import { GameContext } from '../../context/GameContext';

const Photo = () => {
  let mouseX = 0;
  let mouseY = 0;

  const menu = useRef(null);
  const [usersX, setUserX] = useState(0);
  const [usersY, setUserY] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const { isGameStarted } = useContext(GameContext);
  const [characters, loadCharacters] = useGetCharacters();
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const handleClick = (event) => {
    if (isGameStarted) {
      const photoHeight = document.querySelector('.photo').offsetHeight;
      const photoWidth = document.querySelector('.photo').offsetWidth;

      const clickedX = event.nativeEvent.offsetX;
      const clickedY = event.nativeEvent.offsetY;
      const calculatedX = (clickedY / photoHeight) * 100;
      const calculatedY = (clickedX / photoWidth) * 100;

      mouseX = calculatedX;
      mouseY = calculatedY;
      setUserX(calculatedX);
      setUserY(calculatedY);
    }
  };

  const handleMenuResize = () => {
    menu.current.style.setProperty('top', `${mouseX + 2}%`);
    menu.current.style.setProperty('left', `${mouseY + 5}%`);
    setIsMenuHidden((state) => !state);
  };

  useEffect(() => {
    loadCharacters().then(() => {
      setIsLoading(false);
    });
  });

  if (isLoading) {
    return <div>loding...</div>;
  }

  return (
    <div className="photo">
      <span className="target"></span>
      <div
        className="menu"
        ref={menu}
        onClick={() => setIsMenuHidden((state) => !state)}
        hidden={isMenuHidden}
      >
        <CharacterSelect characters={characters} usersX={usersX} usersY={usersY} />
      </div>
      <img
        src={require('../../img/bczqo5kyc3641.png')}
        alt=""
        onClick={(event) => {
          handleClick(event);
          handleMenuResize();
        }}
      />
    </div>
  );
};

export default Photo;

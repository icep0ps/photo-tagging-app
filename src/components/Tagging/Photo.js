import React, { useState } from 'react';
import CharacterSelect from './CharacterSelect';

const Photo = () => {
  const [userClick, setUserClick] = useState(false);
  const [usersX, setUsersX] = useState();
  const [usersY, setUsersY] = useState();

  const handleClick = (event) => {
    console.log(event);
    const usersX = event.nativeEvent.offsetX;
    const usersY = event.nativeEvent.offsetY;
    setUserClick((prev) => !prev);
    setUsersX((prev) => `${usersX}`);
    setUsersY((prev) => `${usersY}`);

    const convertToPercentage = (first_value, second_value) => {
      const percentage = 6.25;
      return ((first_value - second_value) * percentage) / 100;
    };

    const convertPositionToPercentage = (value) => {
      const percentage = 6.25;
      return (value * percentage) / 100;
    };
  };

  const showCusor = (event) => {
    if (userClick) {
      return;
    }
    const cusor = document.querySelector('.cusor');
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    cusor.style.top = `${mouseY}px`;
    cusor.style.left = `${mouseX}px`;
    cusor.style.top = `${mouseY}px`;
    cusor.style.left = `${mouseX}px`;
  };

  if (userClick) {
    return (
      <div className="photo">
        <div className="cusor"></div>
        <CharacterSelect
          usersX={usersX}
          usersY={usersY}
          handleuserClick={setUserClick}
        ></CharacterSelect>
        <img
          src={require('../../img/photo.jpg')}
          alt=""
          onClick={handleClick}
          onMouseMove={showCusor}
        />
      </div>
    );
  } else {
    return (
      <div className="photo">
        <div className="cusor"></div>
        <img
          src={require('../../img/photo.jpg')}
          alt=""
          onClick={handleClick}
          onMouseMove={showCusor}
        />
      </div>
    );
  }
};

export default Photo;

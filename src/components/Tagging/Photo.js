import React, { useState } from 'react';
import CharacterSelect from './CharacterSelect';

const Photo = () => {
  const [userClick, setUserClick] = useState(false);
  const [usersX, setUsersX] = useState();
  const [usersY, setUsersY] = useState();

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

  const handleTargetResize = () => {
    const target = document.querySelector('.target');
    target.style.setProperty('top', `${sky.top}%`);
    target.style.setProperty('left', `${sky.left}%`);
  };

  const handleClick = (event) => {
    const photoHeight = document.querySelector('.photo').offsetHeight;
    const photoWidth = document.querySelector('.photo').offsetWidth;
    const target = document.querySelector('.target');
    target.style.width = `${sky.right - sky.left}%`;
    target.style.height = `${sky.bottom - sky.top}%`;

    const usersX = event.nativeEvent.offsetX;
    const usersY = event.nativeEvent.offsetY;
    const calculatedX = (usersY / photoHeight) * 100;
    const calculatedY = (usersX / photoWidth) * 100;

    handleTargetResize();
    setUsersX(calculatedX);
    setUsersY(calculatedY);
    setUserClick(!userClick);
  };

  if (userClick) {
    return (
      <div className="photo">
        <div className="target"></div>
        <CharacterSelect
          usersX={usersX}
          usersY={usersY}
          handleuserClick={setUserClick}
          userClick={userClick}
        ></CharacterSelect>
        <img
          src={require('../../img/bczqo5kyc3641.png')}
          alt=""
          onClick={handleClick}
        />
      </div>
    );
  } else {
    return (
      <div className="photo">
        <div className="target"></div>
        <img
          src={require('../../img/bczqo5kyc3641.png')}
          alt=""
          onClick={handleClick}
        />
      </div>
    );
  }
};

export default Photo;

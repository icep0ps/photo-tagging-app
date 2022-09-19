import React, { useState } from 'react';
import CharacterSelect from './CharacterSelect';

const Photo = () => {
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
      {userClick ? (
        <CharacterSelect
          usersX={usersX}
          usersY={usersY}
          handleuserClick={setUserClick}
          userClick={userClick}
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

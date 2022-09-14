import React, { Children, useState } from 'react';

const Photo = () => {
  const [userClick, setUserClick] = useState(false);
  const [usersCharaterPos, setUsersCharacterPos] = useState();

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

  const goat = targetFactory('goat', 423, 460, 997, 1040);
  const sumo_wrestler = targetFactory('sumo ', 290, 340, 69, 127);
  const Kangaroo_man = targetFactory('Kangaroo', 675, 751, 852, 890);

  const handleClick = (event) => {
    const usersX = event.nativeEvent.offsetX;
    const usersY = event.nativeEvent.offsetY;
    setUsersCharacterPos((prev) => `${(usersX, usersY)}`);

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
    const cusor = document.querySelector('.cusor');
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    cusor.style.top = `${mouseY}px`;
    cusor.style.left = `${mouseX}px`;
    cusor.style.top = `${mouseY}px`;
    cusor.style.left = `${mouseX}px`;
  };

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
};

export default Photo;

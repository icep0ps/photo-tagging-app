import React from 'react';

const CharacterSelect = ({ usersX, usersY, handleuserClick }) => {
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

  const searchCharaterID = (character_id) => {
    switch (character_id) {
      case 'goat':
        verifyCharater(goat, usersX, usersY);
        break;
      case 'sumo':
        verifyCharater(sumo_wrestler, usersX, usersY);
        break;
      case 'kangaroo':
        verifyCharater(Kangaroo_man, usersX, usersY);
        break;
      default:
        break;
    }
    handleuserClick();
  };

  const verifyCharater = (character, usersX, usersY) => {
    if (
      usersX >= character.left &&
      usersX <= character.right &&
      usersY >= character.top &&
      usersY <= character.bottom
    ) {
      console.log('Found him correct');
    } else {
      console.log('keep looking wrong');
    }
  };

  return (
    <div
      className="menu"
      style={{
        top: `${usersY}px`,
        left: `${usersX}px`,
      }}
    >
      <ul>
        <li onClick={() => searchCharaterID('goat')}>Goat eating grass</li>
        <li onClick={() => searchCharaterID('sumo')}>Sumo wrestler</li>
        <li onClick={() => searchCharaterID('kangaroo')}>Kangaroo_mascott</li>
      </ul>
    </div>
  );
};

export default CharacterSelect;

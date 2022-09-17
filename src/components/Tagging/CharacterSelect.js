import React, { useEffect } from 'react';

const CharacterSelect = ({ usersX, usersY, handleuserClick, userClick }) => {
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
  const sky = targetFactory(
    'sky',
    16.19697419163453,
    17.798872738059924,
    45.27896995708154,
    48.497854077253216
  );

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
      case 'sky':
        verifyCharater(sky, usersX, usersY);
        break;
      default:
        break;
    }
    handleuserClick();
  };

  const verifyCharater = (character, usersX, usersY) => {
    if (
      usersY >= character.left &&
      usersY <= character.right &&
      usersX >= character.top &&
      usersX <= character.bottom
    ) {
      console.log(character.left, usersY, character.right);
      console.log('Found him correct');
    } else {
      console.log(character.left, usersY, character.right);
      console.log('keep looking wrong');
    }
  };

  const handleWindowResize = () => {
    const menu = document.querySelector('.menu');
    menu.style.setProperty('top', `${usersX + 2}%`);
    menu.style.setProperty('left', `${usersY + 5}%`);
  };

  useEffect(() => {
    handleWindowResize();
  }, [userClick]);

  return (
    <div className="menu">
      <ul>
        <li onClick={() => searchCharaterID('goat')}>Goat eating grass</li>
        <li onClick={() => searchCharaterID('sumo')}>Sumo wrestler</li>
        <li onClick={() => searchCharaterID('kangaroo')}>Kangaroo_mascott</li>
        <li onClick={() => searchCharaterID('sky')}>sky driver</li>
      </ul>
    </div>
  );
};

export default CharacterSelect;

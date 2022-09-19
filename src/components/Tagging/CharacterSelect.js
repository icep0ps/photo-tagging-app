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
  const searchCharaterID = (character_id) => {
    switch (character_id) {
      case 'bird':
        verifyCharater(bird, usersX, usersY);
        break;
      case 'skater':
        verifyCharater(wipeout, usersX, usersY);
        break;
      case 'sky':
        verifyCharater(sky, usersX, usersY);
        break;
      default:
        break;
    }
  };

  const verifyCharater = (character, usersX, usersY) => {
    if (
      usersY >= character.left &&
      usersY <= character.right &&
      usersX >= character.top &&
      usersX <= character.bottom
    ) {
      const status = document.querySelector(`#${character.id}`);
      status.style.backgroundColor = '#3dd900';
      console.log(`Found ${character.id}`);
    } else {
      console.log('keep looking wrong');
    }
    handleuserClick();
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
        <li id="bird" onClick={() => searchCharaterID('bird')}>
          Black Bird
        </li>
        <li id="skater" onClick={() => searchCharaterID('skater')}>
          Wiped out
        </li>
        <li id="sky" onClick={() => searchCharaterID('sky')}>
          sky driver
        </li>
      </ul>
    </div>
  );
};

export default CharacterSelect;

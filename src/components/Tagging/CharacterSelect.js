import React, { useEffect } from 'react';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

const CharacterSelect = ({
  usersX,
  usersY,
  handleuserClick,
  userClick,
  characters,
  sky,
  bird,
  wipeout,
  setCharacters,
}) => {
  const { setGameover, setIsGameStarted } = useContext(GameContext);

  const allAreCharactersFound = () =>
    characters.every((character) => character.isFound === true);
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
      const found = characters.map((characterToBeFound) => {
        if (characterToBeFound.id === character.id) {
          characterToBeFound.isFound = true;
        }

        return characterToBeFound;
      });
      setCharacters(found);
      const status = document.querySelector(`#${character.id}`);
      status.style.backgroundColor = '#3dd900';
    } else {
    }
    if (allAreCharactersFound()) {
      setIsGameStarted(false);
      setGameover(true);
    }
    handleuserClick();
  };

  const handleMenuResize = () => {
    const menu = document.querySelector('.menu');
    menu.style.setProperty('top', `${usersX + 2}%`);
    menu.style.setProperty('left', `${usersY + 5}%`);
  };

  useEffect(() => {
    handleMenuResize();
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
          sky diver
        </li>
      </ul>
    </div>
  );
};

export default CharacterSelect;

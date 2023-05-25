/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
import React, { useEffect, useState } from 'react';
import { GameContext } from '../../context/GameContext';

const CharacterSelect = ({ usersX, usersY, characters: charactersMap }) => {
  const [characters, setCharacters] = useState([]);

  const checkIfFound = (value, key, map) => {
    console.log(key, value.isFound);
  };

  const convertCharactersMapToArray = () => {
    const charactersarry = [];
    charactersMap.forEach((character) => {
      charactersarry.push(character);
    });

    setCharacters(charactersarry);
    return charactersarry;
  };

  useEffect(() => {
    convertCharactersMapToArray();
  }, []);

  const { setGameover, setIsGameStarted } = useContext(GameContext);

  const allAreCharactersFound = () => charactersMap.forEach(checkIfFound);

  const isCharacterFound = (character_id) => {
    const character = charactersMap.get(character_id);
    if (character.isCharacterFound(usersX, usersY)) {
      const status = document.querySelector(`#${character.id}`);
      status.style.backgroundColor = '#3dd900';

      if (allAreCharactersFound()) {
        setIsGameStarted(false);
        setGameover(true);
      }
    }
  };

  return (
    <ul>
      {characters.map((character) => {
        const { id } = character;
        return (
          <li id={id} onClick={() => isCharacterFound(id)} key={id}>
            {id}
          </li>
        );
      })}
    </ul>
  );
};

export default CharacterSelect;

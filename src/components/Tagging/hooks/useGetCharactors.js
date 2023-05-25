import { useState } from 'react';
import Character from '../../../utils/Character';
import { db } from '../../../firebase/firebase-config';
import { getDocs, collection } from 'firebase/firestore';

function useGetCharacters() {
  const [characters, setCharacters] = useState(new Map());

  const loadCharacters = async () => {
    await getDocs(collection(db, 'characters')).then((characterSnapshots) => {
      characterSnapshots.forEach((characterSnapshot) => {
        const { id, top, bottom, left, right } = characterSnapshot.data();
        const character = new Character(id, top, bottom, left, right);
        setCharacters((state) => state.set(id, character));
      });
    });
  };

  return [characters, loadCharacters];
}
export default useGetCharacters;

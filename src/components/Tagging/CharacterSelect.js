import React from 'react';

const CharacterSelect = ({character,usersClick}) => {

const verifyCharater = (character_id,usersClick)=>{

    const goat = targetFactory('goat', 423, 460, 997, 1040);
    const sumo_wrestler = targetFactory('sumo ', 290, 340, 69, 127);
    const Kangaroo_man = targetFactory('Kangaroo', 675, 751, 852, 890);

    switch(character_id){
    case 'goat':
        return
    case 'sumo':
        return
    case 'kangaroo':
        return
    default:return
}
}    
    if (
        usersX >= Kangaroo_man.left &&
        usersX <= Kangaroo_man.right &&
        usersY >= Kangaroo_man.top &&
        usersY <= Kangaroo_man.bottom
      ) {
        console.log('Found him correct');
      } else {
        console.log(event, usersX, usersY);
        console.log('keep looking wrong');
      }
  return (
    <div>
      <ul>
        <li onClick={}>Goat eating grass</li>
        <li onClick={}>Sumo wrestler</li>
        <li onClick={}>Kangaroo_mascott</li>
      </ul>
    </div>
  );
};

export default CharacterSelect;

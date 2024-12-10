import React from 'react';
import { useFavorite } from '../../context/FavoriteContext';


const Buttonaddfavorite = ({ character }) => {
  const { addToFavorite } = useFavorite();

  const handleClick = () => {

    if (character) {
      addToFavorite(character); // Agregar personaje a favoritos
    }
  };

  return (
    <button onClick={handleClick}>
      Agregar a Favoritos
    </button>
  );
};

export default Buttonaddfavorite;





// import { useState } from 'react'


// const Buttonaddfavorite = () => {

//     const [buttonEstado, setButtonEstado] = useState(false)

//     const handleAddCart = () => {
//         setButtonEstado((prev) => !prev)
//       }

//   return(
//     <button onClick={handleAddCart}>
//         {buttonEstado ? 'Quitar' : 'Adicionar'} favorito
//     </button>
//   )





import { useState, useEffect } from 'react'
import { getCharacters } from '../services/getCharacters'
import styles from './Characters.module.css'
import Buttonaddfavorite from './Buttonaddfavorite'
import { Link } from 'react-router-dom';
// import { useFavorite } from '../context/FavoriteContext';

const Characters = () => {

  // const { addToFavorite} = useFavorite();

  const [characters, setCharacters] = useState([])
  const [newFetch, setNewFetch] = useState(false)

  useEffect(() => {
    getCharacters().then(response => {
      setCharacters(response)
    })
  }, [newFetch])

  const handleNewFetch = () => {
    setNewFetch((prev) => !prev)
  }

  // console.log(characters);

  return (
    <section>
      <h1 className={styles.title}>TARJETAS DE LOS PERSONAJES</h1>
      <h2 className={styles.subtitle}>Selecciona los que desees ...</h2>
      <div className={styles.cardsContainer}>
        {characters.map((character) => (
          <article className={styles.card} key={character.id}>
            <h2 className={styles.titleCard}>{character.name}</h2>
            <Link to={`/character/${character.id}`}>
              <img src={character.image} alt={character.name} />
            </Link>
            <p>Estado: {character.status}</p>
            <p>Genero: {character.gender}</p>
            {/* <button onClick={() => addToFavorite(character)}>
              Agregar a Favorito
            </button> */}
            <Buttonaddfavorite character={character}/>
          </article>
        ))}
      </div>
      <button
        onClick={handleNewFetch}
      >
        {newFetch ? 'Detener' : 'Iniciar'} Fetch
      </button>
    </section>
  )
}
export default Characters;





// import Counter from "../counter/Counter";  //clase 6


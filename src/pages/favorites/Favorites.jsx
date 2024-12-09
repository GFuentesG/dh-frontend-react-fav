import React from 'react';
import { useFavorite } from '../../context/FavoriteContext';
import styles from './Favorites.module.css';

// const dataFromContext = [];

const Favorites = () => {

  const {favorite, deleteToFavorite} = useFavorite();

  return (
    <section>
      <h1 className={styles.favoritesTitle}>Mis Favoritos</h1>
      <h2 className={styles.favoritesSubtitle}>Aquí están tus personajes favoritos</h2>
      <div className={styles.favoritesContainer}>
        {favorite.length > 0 ? (
          favorite.map((character) => (
            <article className={styles.favoriteCard} key={character.id}>
              <h2 className={styles.titleCard}>{character.name}</h2>
              <img src={character.image} alt={character.name} />
              <p>Estado: {character.status}</p>
              <p>Género: {character.gender}</p>
              <button onClick={() => deleteToFavorite(character.id)}>
                Eliminar de favoritos
              </button>
            </article>
          ))
        ) : (
          <p>No tienes personajes en tus favoritos.</p>
        )}
      </div>
    </section>
  )
}

export default Favorites
import React, { useState, useEffect } from 'react';
import { fetchAllCharacters } from '../services/getCharacterSpecial';
import styles from './CharacterSpecial.module.css'
import Buttonaddfavorite from './Buttonaddfavorite';

const CharacterSpecial = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Llamar a la función para obtener los personajes cuando el componente se monta
        const getCharacters = async () => {
            try {
                const data = await fetchAllCharacters();
                setCharacters(data);  // Guardamos los personajes en el estado
            } catch (error) {
                console.error('Error al obtener los personajes:', error);
            } finally {
                setLoading(false);  // Indicamos que se terminó de cargar
            }
        };

        getCharacters(); // Ejecutar la función
    }, []);

    if (loading) {
        return (
            <div>
                <h3>Cargando... </h3>
                <p>(puede tomar unos minutos, por favor espere)</p>
            </div>)
    }

    return (
        <div>
            <h1>Lista de Personajes de Mario Bros</h1>
            <div className={styles.characterList}>
                {characters.map((character) => (
                    <div key={character.name} className={styles.characterItem}>
                        <h3 className={styles.characterName}>{character.name}</h3>
                        <p className={styles.characterStrength}>Fuerza: {character.strength}</p>
                        <p className={styles.characterOrigin}>Origen: {character.origin}</p>
                        <img src={character.image} alt={character.name} />
                        <Buttonaddfavorite character={character} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CharacterSpecial;

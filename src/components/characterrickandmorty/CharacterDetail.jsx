import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getCharacterDetails } from '../../services/getCharacterDetails';

const CharacterDetail = () => {

    const {id} = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fecthCharacterDetails = async () => {
            try {
                const response = await getCharacterDetails(id);
                setCharacter(response);
            } catch (error) {
                setError("Error al cargar los detalles");
            } finally {
                setLoading(false);
            }
        };

        fecthCharacterDetails();
    }, [id]);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

  return (
    
    <section>
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>Estado: {character.status}</p>
            <p>Especie: {character.species}</p>
            <p>Tipo: {character.type}</p>
            <p>Genero: {character.gender}</p>
            <p>Ubicación: {character.location.name}</p>
            <p>Episodios: {character.episode.length}</p>
            <p>Fecha de creación: {character.created}</p>
            <p>Origen: {character.origin.name}</p>
        </div>
    </section>
    
  )
}

export default CharacterDetail
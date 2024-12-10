import { createContext, useState, useContext, useEffect } from "react";


const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {

    const [favorite, setFavorite] = useState([]);

    // Cargar los personajes favoritos desde el localStorage al iniciar
    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorite-characters');
        if (storedFavorites) {
            setFavorite(JSON.parse(storedFavorites));
        }
    }, []);

    // Guardar los personajes favoritos en el localStorage cada vez que se actualicen
    useEffect(() => {
        if (favorite.length > 0) {
            localStorage.setItem('favorite-characters', JSON.stringify(favorite));
        }
    }, [favorite]);

    const addToFavorite = (character) => {
        // console.log('character recibido:', character);

        if (!character.id) {
            console.log('El personaje no tiene un identificador válido:', character);
            return; 
          }

        if (!favorite.some(favCharacter => favCharacter.id === character.id)) {
            // console.log('agregando a favoritos', character);
            setFavorite([...favorite, character]);
        } else {
            console.log('ya esta en favoritos', character);
        }
    }
    //buscar dentro de favorites con find el elemento y si existe agregarle uno y si no existe lo agregamos, 
    //buscar dentro del array de favorite, devuelve un booleano y con un if un .map para recorrer para llegar 
    //a la propiedad y sumarle uno y si no en addtofavorite 

    const deleteToFavorite = (id) => {
        setFavorite((prevState) => {
            const updatedFavorites = prevState.filter(character => character.id !== id);
            
            // Actualizar el localStorage con los favoritos actualizados
            localStorage.setItem('favorite-characters', JSON.stringify(updatedFavorites));
            
            return updatedFavorites;
        });
    }
    return (
        < FavoriteContext.Provider
            value={{
                favorite,
                addToFavorite,
                deleteToFavorite
            }}>
            {children}
        </FavoriteContext.Provider >
    )
}

export const useFavorite = () => useContext(FavoriteContext);

import { v4 as uuidv4 } from 'uuid';

const API_URL = "https://super-mario-bros-character-api.onrender.com/api/";

export const fetchAllCharacters = async () => {
    const characterNames = [
        'mario', 'luigi', 'princess peach', 'bowser', 
        'toad', 'yoshi', 'donkey kong', 'waluigi', 
        'wario', 'toadette', 'rosalina', 'shy guy',
        'diddy kong', 'goomba', 'koopa troopa', 'princess daisy', 
        'bowser jr' 
    ];

    const storedCharacters = localStorage.getItem('nintendo');
    if(storedCharacters) {
        return JSON.parse(storedCharacters);
    };

    const allCharacterData = [];

    // Realizar la solicitud para cada personaje
    for (const characterName of characterNames) {
        try {
            const response = await fetch(`${API_URL}${characterName.toLowerCase()}`);
            const data = await response.json();

            let characterId = localStorage.getItem(`id-${characterName}`);
            if (!characterId) {
                // Si no existe, se genera uno nuevo y se guarda en localStorage
                characterId = uuidv4();
                localStorage.setItem(`id-${characterName}`, characterId);
            }

            // Asignar el UUID de manera consistente
            const characterWithUUID = {
                ...data,
                id: characterId,
            };

            allCharacterData.push(characterWithUUID);
        } catch (error) {
            console.error(`Error con el personaje ${characterName}:`, error);
        }
    }

    localStorage.setItem('nintengo', JSON.stringify(allCharacterData));

    return allCharacterData; // Retorna los datos de todos los personajes
};

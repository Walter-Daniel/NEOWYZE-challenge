import { Character, CharacterResponse } from '@/interfaces/characterInterfaces';

export const getCharacters = async():Promise<Character[]> => {
    try {

       const response: Response =  await fetch('https://swapi.dev/api/people');
       if (!response.ok) {
        throw new Error('Failed to fetch characters');
        }
        const {results}: CharacterResponse = await response.json();
        return results
       
    } catch (error) {
        return []
    }
}

export const getCharacterByID = async(id:string):Promise<Character> => {
    try {

       const response: Response =  await fetch(`https://swapi.dev/api/people/${id}`);
       if (!response.ok) {
        throw new Error('Failed to fetch movies');
        }
        const character: Character = await response.json();
        return character;
       
    } catch (error) {
        throw new Error('Failed to fetch movies');
    }
}

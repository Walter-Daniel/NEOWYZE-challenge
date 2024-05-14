import { Character, CharacterResponse } from '@/interfaces/characterInterfaces';


export const getCharacters = async(page:number = 1):Promise<CharacterResponse> => {
    try {

       const response: Response =  await fetch(`https://swapi.dev/api/people/?page=${page}`);
       if (!response.ok) {
        throw new Error('Failed to fetch characters');
        }
        const characterResponse: CharacterResponse = await response.json();
        return characterResponse;
       
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch characters')
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

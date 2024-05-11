import { Character } from '@/interfaces/characterInterfaces';

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

import { CardCharacter } from '@/components';
import { getCharacters } from '@/helpers/characterFetcher';
import { charactersToFilter } from '@/helpers/charactersFiltered';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Characters",
  description: "Generated by create next app",
};

export default async function CharactersPage() {

  const characters = await getCharacters();


  return (
    <div>
      <h2 className='font-jedi text-7xl text-center py-6 text-yellow-300'>Characters</h2>
      <div className="flex items-center justify-center flex-wrap min-h-screen">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {
           characters.map((character, index) => (
                <CardCharacter character={character} key={index}/>
          ))
        }
        </div>
      </div>
    </div>
  );
}
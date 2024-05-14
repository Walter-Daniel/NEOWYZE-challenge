import { getCharacterByID } from '@/helpers/characterFetcher';
import Image from 'next/image';
import characterIMG from '@/assets/image/character.jpg'
import { charactersToFilter } from '@/helpers/charactersFiltered';

interface ParamsProps {
    params: {
        id: string
    }
}

export default async function CharacterPage({params}:ParamsProps) {
  const character = await getCharacterByID(params.id);
  const charactersFiltered = charactersToFilter(character)

  return (
    <div className='grid grid-cols-1 md:grid-cols-12 gap-6 '>
      <section className='md:col-span-5 md:pt-7 flex justify-center md:h-[80vh]'>
        <Image
          height={800}
          width={400}
          src={characterIMG}
          alt='Star Wars Movie image'
          priority
          className='object-cover w-auto h-auto'
        />
      </section>
      <section className='md:col-span-7'>
        <h2 className='font-jedi text-5xl md:pt-5 pb-2 text-yellow-300'>{charactersFiltered.name}</h2>
        {charactersFiltered.eye_color && <p>Eye color: {charactersFiltered.eye_color}</p>}
        {charactersFiltered.birth_year && <p>Birth year: {charactersFiltered.birth_year}</p>}
        {charactersFiltered.hair_color && <p>Hair color: {charactersFiltered.hair_color}</p>}
        {charactersFiltered.height && <p>Height: {charactersFiltered.height}</p>}
        {charactersFiltered.skin_color && <p>Skin color: {charactersFiltered.skin_color}</p>}
        {charactersFiltered.mass && <p>Mass: {charactersFiltered.mass}</p>}
      </section>
    </div>
  );
}
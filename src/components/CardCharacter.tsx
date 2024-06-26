import Image from 'next/image';
import Link from 'next/link';       
import characterIMG from '@/assets/image/character.jpg'
import { getId } from '@/helpers/getId';
import { charactersToFilter } from '@/helpers/charactersFiltered';
import { Character } from '@/interfaces/characterInterfaces';

interface CharacterProps {
  character: Character;
}

export const CardCharacter: React.FC<CharacterProps> = ({character}) => {
  
  const id = getId(character.url);
  const charactersFiltered = charactersToFilter(character)

  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
    <div className="h-96 w-72">
      <Image 
        src={characterIMG}
        alt='character img'
        height={500}
        width={500}
        priority
        className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 object-top"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
    <div className="absolute inset-0 flex translate-y-[75%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
      <h1 className="font-dmserif text-3xl font-bold text-white">
        {character.name}
      </h1>
      {
        charactersFiltered.eye_color && (
          <p className="mb-1 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Eye color: {character.eye_color}
          </p>
        )
      }
      {
        charactersFiltered.gender && (
          <p className="mb-1 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Gender: {character.gender}
          </p>
        )
      }
      <Link href={`/characters/${id}`} className='bg-yellow-300 text-black p-2 rounded-md transition-all duration-500 ease-in-out hover:bg-yellow-400'>Learn more</Link>
    </div>
  </div>
  );
};

import { getCharacterByID } from '@/helpers/characterFetcher';
import { getId } from '@/helpers/getId';
import characterIMG from '@/assets/image/stormtrooper.webp'
import Image from 'next/image';
import Link from 'next/link';

interface CharacterListProps {
  url: string;
}

export const CharacterList: React.FC<CharacterListProps> = async({url}) => {
  const id = getId(url)
  if(!id) return <p>Error al encontrar personajes</p>
  const character = await getCharacterByID(id)
  return (
    <div className='h-[150px] w-[130px] m-2 flex flex-col bg-stone-800 justify-center p-2 transition-all ease-in-out duration-500 border border-transparent hover:border-white hover:bg-stone-700'>
      <div className='flex justify-center'>
      <Image 
        src={characterIMG}
        alt={character.name}
        width={80}
        height={100}
        className='rounded-xl w-auto h-auto object-cover '
      />
      </div>
      <div className='flex flex-col'>
        <small className='py-1  truncate'>{character.name}</small>
        <Link href={`/characters/${id}`} className='bg-yellow-400 rounded-md p-1 text-center text-black'>Read more</Link>
      </div>
    </div>
  )
}

'use client'

import { getId } from '@/helpers/getId';
import characterIMG from '@/assets/image/stormtrooper.webp'
import Image from 'next/image';
import Link from 'next/link';
import { Character } from '@/interfaces/characterInterfaces';
import { useEffect, useState } from 'react';

interface CharacterListProps {
  url: string;
}

export const CharacterList: React.FC<CharacterListProps> = ({url}) => {
  
  const [character, setcharacter] = useState<Character | null>(null)
  const [ loading, setLoading] = useState<boolean>(true)
  
  const id = getId(url)
  
  useEffect(() => {
    
    try {
      const fetchCharacter = async() => {
        const response = await fetch(`/api/characters/${id}`);
        const data = await response.json()
        setcharacter(data)
      }
      fetchCharacter();
    } finally{
      setLoading(false)
    }
    
  }, [])

  return (
    <div className='h-[150px] w-[130px] m-2 flex flex-col bg-stone-800 justify-center p-2 transition-all ease-in-out duration-500 border border-transparent hover:border-white hover:bg-stone-700'>
      <div className='flex justify-center'>
      <Image 
        src={characterIMG}
        alt="Character image"
        width={80}
        height={100}
        className='rounded-xl w-auto h-auto object-cover '
      />
      </div>
      <div className='flex flex-col'>
        <small className='py-1 truncate'>{character?.name}</small>
        <Link href={`/characters/${id}`} className='bg-yellow-400 rounded-md p-1 text-center text-black'>Read more</Link>
      </div>
    </div>
  )
}

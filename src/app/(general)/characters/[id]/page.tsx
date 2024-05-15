'use client'

import Image from 'next/image';
import characterIMG from '@/assets/image/character.jpg'
import { charactersToFilter } from '@/helpers/charactersFiltered';
import { Character } from '@/interfaces/characterInterfaces';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function CharacterPage() {

  const [character, setcharacter] = useState<Character | null>(null)
  const [ loading, setLoading] = useState<boolean>(true)
  
  const {id} = useParams();
  const currentPage = Number(id) || 1;
  
  useEffect(() => {
    
    try {
      const fetchCharacter = async() => {
        const response = await fetch(`/api/characters/${currentPage}`);
        const data = await response.json()
        const charactersFiltered =charactersToFilter(data) as Character;
        setcharacter(charactersFiltered)
      }
      fetchCharacter();
    } finally{
      setLoading(false)
    }
    
  }, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:min-h-[90vh]'>
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
        <h2 className='font-jedi text-5xl md:pt-5 pb-2 text-yellow-300'>{character?.name}</h2>
        {character?.eye_color && <p>Eye color: {character?.eye_color}</p>}
        {character?.birth_year && <p>Birth year: {character?.birth_year}</p>}
        {character?.hair_color && <p>Hair color: {character?.hair_color}</p>}
        {character?.height && <p>Height: {character?.height}</p>}
        {character?.skin_color && <p>Skin color: {character?.skin_color}</p>}
        {character?.mass && <p>Mass: {character?.mass}</p>}
      </section>
    </div>
  );
}
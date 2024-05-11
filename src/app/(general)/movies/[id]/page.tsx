import { getMovieByID } from '@/helpers/movieFetcher';
import Image from 'next/image';
import swmovieIMG from '@/assets/image/swmovie.jpg'
import { CharacterList } from '@/components';
import { Movie } from '@/interfaces/movieInterfaces';

interface ParamsProps {
    params: {
        id: string
    }
}

export default async function MovisePage({params}:ParamsProps) {
  const movie:Movie = await getMovieByID(params.id);
  return (
    <div className='grid grid-cols-1 md:grid-cols-12 gap-6 items-center'>
      <section className='md:col-span-4 flex justify-center items-center'>
        <Image
          width={500}
          height={500}
          src={swmovieIMG}
          alt='Star Wars Movie image'
          priority
        />
      </section>
      <section className='md:col-span-8'>
        <h2 className='font-jedi text-5xl pt2 md:pt-5 pb-2 text-yellow-300'>{movie.title}</h2>
        <h3 className='text-2xl font-jedi'>Episode {movie.episode_id}</h3>
        <p className=''>Directed by {movie.director}</p>
        <p className='f'>Characters:</p>
        <div className='flex flex-wrap pt-4 justify-center md:justify-between'>
          {
            movie.characters.map((character, index) => (
              <CharacterList key={index} url={character}/>
            ))
          }
        </div>
      </section>
    </div>
  );
}
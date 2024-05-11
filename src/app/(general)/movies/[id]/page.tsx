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
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <section>
        <Image
          width={500}
          height={500}
          src={swmovieIMG}
          alt='Star Wars Movie image'
          priority
        />
      </section>
      <section>
        <h2 className='font-jedi text-5xl pb-4 text-yellow-300'>{movie.title}</h2>
        <h3 className='text-2xl'>Episode {movie.episode_id}</h3>
        <p className=''>Directed by {movie.director}</p>
        <p className='f'>Characters:</p>
        {/* Characters List */}
        <div className='flex flex-wrap pr-2 pt-4'>
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
import { Card } from '@/components';
import { getMovies } from '@/helpers/movieFetcher';

export default async function MoviesPage() {

  const movies = await getMovies();

  return (
    <div>
      <h2 className='font-jedi text-7xl text-center py-6 text-yellow-300'>Movies</h2>
      <div className="flex items-center justify-center flex-wrap min-h-screen">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {
          movies.sort((a, b) => (a.episode_id - b.episode_id)).map((movie, index) => (
                <Card {...movie} key={index}/>
          ))
        }
        </div>
      </div>
    </div>
  );
}
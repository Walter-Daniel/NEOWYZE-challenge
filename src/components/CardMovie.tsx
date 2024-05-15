import { getId } from '@/helpers/getId';
import { Movies } from '@/interfaces/movieInterfaces';
import Image from 'next/image';
import Link from 'next/link';
import swMovieIMG from '@/assets/image/swmovie.jpg'

export const Card: React.FC<Movies> = ({title, episode_id, url}) => {

  const id = getId(url);

  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
    <div className="h-96 w-72">
      <Image
        className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
        src={swMovieIMG}
        alt="movie card"
        height={800}
        width={500}
        priority
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
    <div className="absolute inset-0 flex translate-y-[70%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
      <h1 className="font-dmserif text-3xl font-bold text-white">
        {title}
      </h1>
      <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Epidose: {episode_id}
      </p>
      <Link href={`/movies/${id}`} className='bg-yellow-300 text-black p-2 rounded-md transition-all duration-500 ease-in-out hover:bg-yellow-400'>Learn more</Link>
    </div>
  </div>
  );
};

import { Movie, Movies, MoviesResponse } from '@/interfaces/movieInterfaces';

export const getMovies = async():Promise<Movies[]> => {
    try {

       const response: Response =  await fetch('https://swapi.dev/api/films');
       if (!response.ok) {
        throw new Error('Failed to fetch movies');
        }
        const {results}: MoviesResponse = await response.json();
        return results
       
    } catch (error) {
        throw new Error('Failed to fetch movies');
    }
}

export const getMovieByID = async(id:string):Promise<Movie> => {
    try {

       const response: Response =  await fetch(`https://swapi.dev/api/films/${id}`);
       if (!response.ok) {
        throw new Error('Failed to fetch movie');
        }
        const movie: Movie = await response.json();
        return movie;
       
    } catch (error) {
        throw new Error('Movie not found');
    }
}

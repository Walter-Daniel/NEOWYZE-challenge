
import { CardCharacter, Pagination } from '@/components';
import { CharacterResponse } from '@/interfaces/characterInterfaces';

interface ServerParams {
  searchParams: {
      page: string
  }
}

export default async function CharactersPage({searchParams}:ServerParams) {
  const currentPage = searchParams.page ?? '1';

  const response = await fetch(`http://localhost:3000/api/characters?page=${currentPage}`);
  const charactersResponse: CharacterResponse = await response.json();
  const { count, results } = charactersResponse;
  const totalPages = Math.ceil(count/10)

  return (
    <div>
      <h2 className='font-jedi text-3xl md:text-7xl text-center py-6 text-yellow-300'>Characters</h2>
      <div className="flex items-center justify-center flex-wrap min-h-screen">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {
               results.map((character, index) => (
                <CardCharacter character={character} key={index}/>
              ))
          }
        </div>
      </div>
      <div className='flex justify-center'>
        <Pagination totalPages={totalPages}/>
      </div>
    </div>
  );
}
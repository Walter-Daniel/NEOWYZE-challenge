import { NextResponse } from 'next/server';
import { CharacterResponse } from '@/interfaces/characterInterfaces';


export async function GET(request: Request){
    const { searchParams } = new URL(request.url)
    const page = Number(searchParams.get('page') ?? '1')
    const response = await fetch(`https://swapi.dev/api/people?page=${page}`, {
        headers: {
            'Content-Type': 'application/json',
          },
    })
    if (!response.ok) {
        NextResponse.json('Failed to fetch characters');
    }
    const data: CharacterResponse = await response.json();
   return NextResponse.json(data)
}
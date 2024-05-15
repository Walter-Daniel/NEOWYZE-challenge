import { Movie } from "@/interfaces/movieInterfaces";
import { NextResponse } from "next/server";

export async function GET(request: Request){ 
    const { searchParams } = new URL(request.url)
    const id = Number(searchParams.get('id') ?? '1')

    const response = await fetch(`https://swapi.dev/api/films/${id}`, {
        headers: {
            'Content-Type': 'application/json',
          },
    })
    if (!response.ok) {
        NextResponse.json('Failed to fetch movie');
    }
    const data: Movie = await response.json();
    
   return NextResponse.json(data)
}
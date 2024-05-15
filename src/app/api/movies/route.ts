import { MoviesResponse } from "@/interfaces/movieInterfaces";
import { NextResponse } from "next/server";

export async function GET(request: Request){ 
    const response = await fetch(`https://swapi.dev/api/films`, {
        headers: {
            'Content-Type': 'application/json',
          },
    })
    if (!response.ok) {
        NextResponse.json('Failed to fetch movies');
    }
     const {results}: MoviesResponse = await response.json();
    
   return NextResponse.json({data:results})
}
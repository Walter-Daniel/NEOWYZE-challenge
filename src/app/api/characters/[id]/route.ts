import { Character } from "@/interfaces/characterInterfaces";
import { NextResponse } from "next/server";

interface Segment {
    params:{
        id: string;
    }
}

export async function GET(request:Request, {params}: Segment){
    const fetchCharacter = await fetch(`https://swapi.dev/api/people/${params.id}`)
    const character:Character = await fetchCharacter.json();
    return NextResponse.json(character)
}
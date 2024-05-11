export interface Character {
  birth_year: string;
  created: Date;
  edited: Date;
  eye_color: string;
  films: string[];
  gender: Gender;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: any[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface CharacterResponse {
  count: number;
  next: string;
  previous: null;
  results: Character[];
}

export enum Gender {
  Female = "female",
  Male = "male",
  NA = "n/a",
}

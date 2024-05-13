export interface Character {
  birth_year: string;
  eye_color: string;
  gender: Gender;
  hair_color: string;
  height: string;
  mass: string;
  name: string;
  skin_color: string;
  url: string;
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

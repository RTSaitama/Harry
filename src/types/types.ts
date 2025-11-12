export interface RouteConfig {
  index?: boolean;
  path?: string;
  element: React.ReactElement;
}
export type Wand = {
  wood: string;
  core: string;
  length: number;
};

export type Character = {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
};
export type Spell = {
  id:string,
  name:string,
  description:string,
}
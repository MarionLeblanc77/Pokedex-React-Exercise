export interface IPokemon {
  pokedex_id: number;
  name: {
    fr: string;
    en: string;
  };
  generation: number;
  types: IType[];
  sprites: {
    regular: string;
  };
}

export interface IType {
  name: string;
  image: string;
}

export interface IList {
  name: string;
  url: string;
}

export interface IPokemon {
  id: number;
  name: string;
  order: number;
  types: IType[];
}

export interface IType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

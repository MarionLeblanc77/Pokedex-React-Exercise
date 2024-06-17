import { useEffect, useState } from 'react';
import { IList, IPokemon } from '../../../@types/pokemon';
import axiosInstance from '../../../axios/axios';
import './gallery.scss';
interface CardProps {
  pokemon: IList;
}
function Card({ pokemon }: CardProps) {
  const [pokemonInfo, setPokemonInfo] = useState<IPokemon>();

  const getOnePokemon = async (name: string) => {
    const result = await axiosInstance.get(`/pokemon/${name}`);
    setPokemonInfo(result.data);
  };

  useEffect(() => {
    getOnePokemon(pokemon.name);
  }, []);

  const types = pokemonInfo?.types.map((type) => {
    return type.type.name;
  });

  console.log(types);

  return (
    <article className="card">
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <img
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonInfo?.id}.svg`}
        alt=""
      />
      {types?.map((type) => {
        return <li>{type.charAt(0).toUpperCase() + type.slice(1)}</li>;
      })}
    </article>
  );
}

export default Card;

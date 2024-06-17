import { useEffect, useState } from 'react';
import { IPokemon } from '../../../@types/pokemon';
import axiosInstance from '../../../axios/axios';
import './gallery.scss';
interface CardProps {
  pokemon: IPokemon;
}
function Card({ pokemon }: CardProps) {
  return (
    <article className="card">
      <h3 className="card__title">{pokemon.name.fr}</h3>
      <img className="card__img" src={pokemon.sprites.regular} alt="" />
      <div className="card__types">
        {pokemon.types.map((type) => {
          return (
            <li key={type.name} className="card__types__type">
              <img className="card__types__type__icon" src={type.image} />
              <p className="card__types__type__name">{type.name}</p>
            </li>
          );
        })}
      </div>
    </article>
  );
}

export default Card;

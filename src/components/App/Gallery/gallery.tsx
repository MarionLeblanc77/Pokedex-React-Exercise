import { IPokemon } from '../../../@types/pokemon';
import Card from './card';
import './gallery.scss';

interface GalleryProps {
  countResult: number;
  pokemonList: IPokemon[];
}

function Gallery({ countResult, pokemonList }: GalleryProps) {
  return (
    <section className="gallery">
      <h2 className="gallery__title"> {countResult} Pokémon trouvés.</h2>
      <div className="gallery__cards">
        {pokemonList.map((pokemon) => {
          return <Card key={pokemon.pokedex_id} pokemon={pokemon} />;
        })}
      </div>
    </section>
  );
}

export default Gallery;

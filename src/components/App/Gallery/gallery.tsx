import { IList, IPokemon } from '../../../@types/pokemon';
import Card from './card';
import './gallery.scss';

interface GalleryProps {
  countResult: number;
  pokemonList: IList[];
}

function Gallery({ countResult, pokemonList }: GalleryProps) {
  return (
    <section className="gallery">
      <h2 className="gallery__title"> {countResult} Pokémon trouvés.</h2>
      {pokemonList.map((pokemon) => {
        return <Card pokemon={pokemon} />;
      })}
    </section>
  );
}

export default Gallery;

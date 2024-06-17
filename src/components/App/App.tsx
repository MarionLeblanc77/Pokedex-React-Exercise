import axios from 'axios';

import './App.scss';
import Gallery from './Gallery/gallery';
import Search from './Search/search';
import Header from './Header/header';
import Footer from './Footer/footer';
import { useEffect, useState } from 'react';
import { IPokemon } from '../../@types/pokemon';
import axiosInstance from '../../axios/axios';

function App() {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [countResult, setCountresult] = useState<number>(0);

  const getAllPokemon = async () => {
    const result = await axiosInstance.get('/pokemon');
    setCountresult(result.data.length - 1);
    setPokemonList(result.data.slice(1));
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <div className="app">
      <Header />
      <Search />
      <Gallery pokemonList={pokemonList} countResult={countResult} />
      <Footer />
    </div>
  );
}

export default App;

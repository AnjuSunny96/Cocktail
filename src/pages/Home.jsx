import React from 'react';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';

function Home() {
  return (
    <main>
      <SearchForm/>
      <CocktailList/>
    </main>
  )
}

export default Home
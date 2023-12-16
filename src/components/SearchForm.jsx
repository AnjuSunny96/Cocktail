import React from 'react';
import {useGlobalContext} from '../context'


function SearchForm() {
 const{setSearchTerm}=useGlobalContext();
 const searchValue=React.useRef();

 const searchCocktail=()=>{
  setSearchTerm(searchValue.current.value)
 }

 const submitHandler=(e)=>{
  e.preventDefault();
 }

 React.useEffect(()=>{
  searchValue.current.focus();
 })

  return (
  <section className="section search">
    <form className="search-form" onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">search your favorite cocktail</label>
        <input type="text" id='name' ref={searchValue} onChange={searchCocktail}/>
      </div>
    </form>
  </section>
  )
}

export default SearchForm
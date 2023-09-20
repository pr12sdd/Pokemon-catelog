import { useState } from 'react';
import './search.css'
import useDebounce from '../../hooks/useDebounce';
function Search({updateSearchTerm}){
   const debounceCallBack=useDebounce((e)=>updateSearchTerm(e.target.value));
   return (
         <div className="search-wrapper">
        <input
        id='pokemon-name-search'
        type="text"
        placeholder="Pokedex Name......"
        onChange={debounceCallBack}
        />
        </div>
     )
}
export default Search;
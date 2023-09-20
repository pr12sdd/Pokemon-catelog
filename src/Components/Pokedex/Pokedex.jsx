import { useEffect, useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/search";
import './Pokedex.css'
import PokemonDetails from "../PokemonDetails/PokemonDetails";
function Pokedex(){
    const[searchTerm,setSearchTerm]=useState('');

    return <div className="pokedex-wrapper">       
    <div className="search"><Search updateSearchTerm={setSearchTerm}/></div>
    {(!searchTerm)?<PokemonList/>:<div className="render"><PokemonDetails key={searchTerm} pokemonName={searchTerm}/></div>};
    </div>
    
    }
    export default Pokedex;
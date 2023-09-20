import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList(type){
    const [pokemonDetails,setPokemonDetails]=useState({
        PokemonList : [],
        IsLoading : true,
        pokedexurl : "https://pokeapi.co/api/v2/pokemon",
        nexturl : ' ',
        prevurl : ' '
    })
    async function DataDownload(){
            setPokemonDetails((state)=> ({...state,IsLoading : true}));
       
            const response= await axios.get(pokemonDetails.pokedexurl); //Tis downloads list of 20 Pokemons.
            const pokemonResults=response.data.results;
        
    
    
            setPokemonDetails({...pokemonDetails,
               nexturl :response.data.next,
               prevurl: response.data.previous});
        const pokemonResultsPromise=pokemonResults.map((pokemon)=>axios.get(pokemon.url))
        
        
        const pokemonData=await axios.all(pokemonResultsPromise);
        
        const res=pokemonData.map((pokeData)=>{
             const pokemon=pokeData.data;
              return {
              id:pokemon.id,
              name:pokemon.name,
              image:(pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
              types:pokemon.types};
       });
    
       setPokemonDetails((state)=>({...state,PokemonList : res,IsLoading: false}));
    }
    
   useEffect(()=>{
    DataDownload();
},[pokemonDetails.pokedexurl])

return {pokemonDetails,setPokemonDetails};
}
export default usePokemonList;
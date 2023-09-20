import { useParams } from "react-router-dom";
import './PokemonDetails.css'
import usePokemonDetails from "../../hooks/usePokemonDetails";
import usePokemonList from "../../hooks/usePokemonList";
function PokemonDetails({pokemonName}){
    const {id}=useParams(); // Yaha pa haam jo bhi hamare URL ma variable ha unko haam fetch kar rahe  ha.
    const {pokemonDetails,setPokemonDetails}=usePokemonList(true);
    const{Pokemon}=usePokemonDetails(id,pokemonName);
   return (<div className="pokemon-details-wrapper">
    <img className="pokemon-image" src={Pokemon.image}/>
    <div className="pokemon-name"><span>{Pokemon.name}</span></div>
    <div className="pokemon-name">Weight : {Pokemon.weight}</div>
    <div className="pokemon-name">Height : {Pokemon.height}</div>
    <div className="pokemon-types">
        { Pokemon.types && Pokemon.types.map((t)=> <div key={t}>{t}</div>) } 
    </div>
     {
      Pokemon.types && Pokemon.similarPokemons && 
      <div>
        more {Pokemon.types[0]} type pokemons
        <ul>
          {Pokemon.similarPokemons.map((p)=><li key={p.pokemon.url}>{p.pokemon.name}</li>)}
        </ul>
      </div> 
     }
   </div>

   
   )
}
export default PokemonDetails;
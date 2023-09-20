import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from '../../hooks/usePokemonList';
function PokemonList(){
    const {pokemonDetails,setPokemonDetails}=usePokemonList(false);
    return (<div className="Pokemon-list-wrapper">
        <div className="Pokedex-wrapper">
        {(pokemonDetails.IsLoading?"Loading........":pokemonDetails.PokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>))}
        </div>
        <div className="controls">
            <button disabled={pokemonDetails.prevurl==null} onClick={()=> setPokemonDetails({...pokemonDetails,pokedexurl:pokemonDetails.prevurl})}>Previous</button>
            <button disabled={pokemonDetails.nexturl==null} onClick={()=> setPokemonDetails({...pokemonDetails,pokedexurl:pokemonDetails.nexturl})}>Next</button>
        </div>
    </div>)
}
export default PokemonList;
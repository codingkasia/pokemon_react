import React from "react";
import PokemonListItem from './PokemonListItem'

const PokemonList = props => {
console.log(props.pokemons)
    return <div> {props.pokemons.map((pokemon) => <PokemonListItem pokemon={pokemon} key={pokemon.name} />)}
    
    </div>; 
}

export default PokemonList;

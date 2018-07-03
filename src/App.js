import React, { Component } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import Search from './components/Search'
import pokemonsList from './data.js'

// const pokemons = [
//   {
//     height: 10,
//     weight: 130,
//     order: 2,
//     name: "ivysaur",
//     abilities: ["overgrow", "chlorophyll"],
//     moves: []
//   },
//   {
//     height: 20,
//     weight: 1000,
//     order: 3,
//     name: "venusaur",
//     abilities: ["overgrow", "chlorophyll"],
//     moves: []
//   }]

class App extends Component {
  constructor() {
    super();
    this.state = { 
      pokemons: pokemonsList, 
      searchTerm: "", 
      pokemonCardView: 'front'};
  }
  // componentDidMuont() {
  //   this.searchPokemons
  // }
  searchPokemons = () => {
    return pokemonsList.filter(pokemon =>
      pokemon.name.includes(this.state.searchTerm)
    );
  };

  updateSearchTerm = (newTerm) => {
    this.setState({searchTerm: newTerm})

  }

  render() {
    return <div className="App">
      <Search updateSearchTerm={this.updateSearchTerm} />
        <PokemonList pokemons={this.searchPokemons()} />
      </div>;
  }
}

export default App;

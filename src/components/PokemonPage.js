import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  state = {
    pokemons: []
  }

 componentDidMount(){
   this.getPokemons()
 }

 filterPokemon = (filter) => {
  let newPokes = this.state.pokemons.filter(poke => poke.name.includes(filter)) 
  this.setState({ 
     pokemons: newPokes
   }) 
  filter === '' ? this.getPokemons() : null } 

  getPokemons = () => {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(poke => this.setState( {pokemons: poke} ) ) 
       }

  addPokemon = pokemon => {
      this.setState({ pokemons: [...this.state.pokemonCollection, pokemon] })
  }
  
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPoke={this.addPokemon} newPoke={this.newPokemon} />
        <br />
        <Search filter={this.filterPokemon} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} />
      </Container>
    )
  }
}

export default PokemonPage

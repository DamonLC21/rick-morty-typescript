import React, { Component } from 'react';
import './App.css';
import CharacterCard from './components/CharacterCard';
import {Character} from './types'

interface IAppState {
  name: string;
  characters: Character[];
}
class App extends Component<{}, IAppState> {

  constructor(props: {}){
    super(props)
    this.state = {
      name: "Bryan",
      characters: [],
    }
  }

  randomFunction = (url: string, id: number) => 7

  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(({results}) => this.setState({characters: results as Character[]}))
  }

  showCharacters = () => this.state.characters.map(character => <CharacterCard key={character.id} character={character} />)

  render(){
    return (
      <div className="App">
        {this.showCharacters()}
      </div>
    );
  }
}

export default App;

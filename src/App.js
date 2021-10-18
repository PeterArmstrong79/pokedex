import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";

function App(){
  const abilities=["Anticipation", "Speed", "Solar-Beam"];
  const date = new Date().toLocaleDateString();
  return (
    <div>
      <Logo appName="Pedros's Pokedex" />
      <BestPokemon abilities={abilities}/>
      <CaughtPokemon date={date}/>
      <PokemonMovesSelector />
    </div>
  );
}

export default App;

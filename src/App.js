import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const abilities=["Anticipation", "Speed", "Solar-Beam"];

function App(){
  return ( 
    <div>
      <Logo appName="Pedros's Pokedex" />
      <BestPokemon abilities={abilities}/>
      <CaughtPokemon />
    </div>
  );
}

export default App;

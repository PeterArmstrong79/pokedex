import React, { useState, useEffect } from "react";

function PokemonMoves(props) {
  const [pokemonData, setpokemonData] = useState(null);
  function pokeMove() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setpokemonData(data);
      });
  }
  useEffect(pokeMove, [props.pokemonId]);
  //if (pokemonData) {
    return (
      <div>
        {pokemonData ? (
          <div>
          <p>{pokemonData.name}'s moves:</p>
          <ul>
            {pokemonData.moves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
            })}
          </ul>
          </div>
          ) : (
          <span>Loading ...</span>
        )}
      </div>
  );
// } else {
//  return null;
// }
}

export default PokemonMoves;
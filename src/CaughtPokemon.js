import React from "react";

const CaughtPokemon = () => {
    const date = new Date().toLocaleDateString();
    return (
      <p>Caught 0 Pokemon on {date}</p>
    );
  };

  export default CaughtPokemon;
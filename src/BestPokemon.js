import React from "react";

const BestPokemon = () => {
    const abilities = ["Anticipation", "Speed", "Solar-Beam"];
      return (
        <div>
          <p>My favorite pokemon is Deoxys</p>
            <ul>
              {abilities.map((ability) => (
                <li>{ability}</li>
              ))}
            </ul>
        </div>
    );
  };

  export default BestPokemon;
import React from "react";

function App(){
  return  <div>
            <Logo />
            <BestPokemon />
            <CaughtPokemon />
          </div>;
}

const Logo = () => {
  const appName = "Pedro's Pokedex";
  return (
    <header>
      <h1>{appName}</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pidgey image"></img>
    </header>
  );
};

const BestPokemon = () => {
  const abilities = [`Anticipation`, `Speed`, `Solar-Beam`]
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

const CaughtPokemon = () => {
  const date = new Date().toLocaleDateString()
  return (
    <p>Caught 0 Pokemon on</p>
  )
}

export default App;

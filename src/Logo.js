import React from "react";
//import App from "./App";

const Logo = (props) => {
    //const appName = "Pedro's Pokedex";
    return (
      <header>
        <h1>{props.appName}</h1>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pidgey image"></img>
      </header>
    );
  };

export default Logo;
import React from "react";

const Logo = (props) => {
  const logWhenClicked = () => {
    console.log("Pants");
  };
    return (
      <header>
        <h1>{props.appName}</h1>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pidgey" onClick={logWhenClicked}></img>
      </header>
    );
  };

export default Logo;
import React from "react";
import Card from "../Cards/Card";

const PokemonList = () =>{
    return(
        <div className="list-container">
            <Card type={"grass"}
                number={"001"}
                pokemon={"./Imagenes/bulbasaur.png"}
                title={"grass-name"}
                name={"Bulbasaur"}/>
                
            <Card type={"fire"}
                number={"004"}
                pokemon={"./Imagenes/charmander.png"}
                title={"fire-name"}
                name={"Charmander"}/>
        </div>
    )
}
export default PokemonList;
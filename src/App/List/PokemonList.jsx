import React from "react";
import Card from "../Cards/Card";

const PokemonList = () =>{
    return(
        <div className="list-container">
            <Card type={"grass"}
                number={"#001"}
                pokemon={"./Imagenes/bulbasaur.png"}
                title={"grass-name-list"}
                name={"Bulbasaur"}/>

            <Card type={"fire"}
                number={"#004"}
                pokemon={"./Imagenes/charmander.png"}
                title={"fire-name-list"}
                name={"Charmander"}/>
            
            <Card type={"water"}
                number={"#007"}
                pokemon={"./Imagenes/squirtle.png"}
                title={"water-name-list"}
                name={"Squirtle"}/>
                
            <Card type={"steel"}
                number={"#304"}
                pokemon={"./Imagenes/aron.png"}
                title={"steel-name-list"}
                name={"Aron"}/>
        </div>
    )
}
export default PokemonList;
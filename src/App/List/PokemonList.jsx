import React from "react";
import Card from "../Cards/Card";

const PokemonList = () =>{
    return(
        <div className="list-container">
            <Card type={"grass box"} 
                number={"#001"}
                pokemon={"./Imagenes/bulbasaur.png"}
                title={"grass-name-list name-box"}
                name={"Bulbasaur"}/>

            <Card type={"fire box"}
                number={"#004"}
                pokemon={"./Imagenes/charmander.png"}
                title={"fire-name-list name-box"}
                name={"Charmander"}/>
            
            <Card type={"water box"}
                number={"#007"}
                pokemon={"./Imagenes/squirtle.png"}
                title={"water-name-list name-box"}
                name={"Squirtle"}/>
                
            <Card type={"steel box"} 
                number={"#304"}
                pokemon={"./Imagenes/aron.png"}
                title={"steel-name-list name-box"}
                name={"Aron"}/>

            <Card type={"normal box"}
                number={"#132"}
                pokemon={"./Imagenes/ditto.png"}
                title={"normal-name-list name-box"}
                name={"Ditto"}/>

            <Card type={"ghost box"} 
                number={"#092"}
                pokemon={"./Imagenes/gastly.png"}
                title={"ghost-name-list name-box"}
                name={"Gastly"}/>

            <Card type={"psychic box"} 
                number={"#152"}
                pokemon={"./Imagenes/mew.png"}
                title={"psychic-name-list name-box"}
                name={"Mew"}/>

            <Card type={"bug box"} 
                number={"#012"}
                pokemon={"./Imagenes/butterfree.png"}
                title={"bug-name-list name-box"}
                name={"Butterfree"}/>

            <Card type={"electric box"}
                number={"#025"}
                pokemon={"./Imagenes/pikachu.png"}
                title={"electric-name-list name-box"}
                name={"Pikachu"}/>
        </div>
    )
}
export default PokemonList;
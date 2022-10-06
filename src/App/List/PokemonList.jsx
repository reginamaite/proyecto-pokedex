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
                  box={"box"} 
                number={"#004"}
                pokemon={"./Imagenes/charmander.png"}
                title={"fire-name-list"}
                name={"Charmander"}/>
            
            <Card type={"water"}
                  box={"box"} 
                number={"#007"}
                pokemon={"./Imagenes/squirtle.png"}
                title={"water-name-list"}
                name={"Squirtle"}/>
                
            <Card type={"steel"}
                  box={"box"} 
                number={"#304"}
                pokemon={"./Imagenes/aron.png"}
                title={"steel-name-list"}
                name={"Aron"}/>

            <Card type={"normal"}
                  box={"box"} 
                number={"#132"}
                pokemon={"./Imagenes/ditto.png"}
                title={"normal-name-list"}
                name={"Ditto"}/>

            <Card type={"ghost"}
                  box={"box"} 
                number={"#092"}
                pokemon={"./Imagenes/gastly.png"}
                title={"ghost-name-list"}
                name={"Gastly"}/>
        </div>
    )
}
export default PokemonList;
import React from "react";
import Card from "../Cards/Card";

const PokemonList = ({list}) =>{
    console.log(list)
    return(
        <div className="list-container">
            {
                list.map((pokemon,key)=>{
                    console.log(pokemon.type)
                    return (
                        <Card key={key}
                        type={`${pokemon.type.toLowerCase()} box`} 
                        number={`${pokemon.id}`}
                        pokemon={`./Imagenes/${pokemon.name.toLowerCase()}.png`}
                        title={`${pokemon.type.toLowerCase()}-name-list name-box`}
                        name={`${pokemon.name}`}/>
                    )
                })
            }
        </div>
    )
}
export default PokemonList;
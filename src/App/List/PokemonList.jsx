import React from "react";
import Card from "../Cards/Card";

const PokemonList = ({list}) =>{
    console.log(list)
    return(
        <div className="list-container">
            {
                list.map((pokemon)=>{
                    console.log(pokemon.id)
                    return (
                        <Card type={`${pokemon.type.toLowerCase()} box`} 
                        number={`${pokemon.id}`}
                        pokemon={`./Imagenes/${pokemon.name.toLowerCase()}.png`}
                        title={`${pokemon.title} name-box`}
                        name={`${pokemon.name}`}/>
                    )
                })
            }
        </div>
    )
}
export default PokemonList;
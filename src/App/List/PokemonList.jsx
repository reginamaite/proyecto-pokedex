import React from "react";
import Card from "../Cards/Card";

const PokemonList = ({list}) =>{
    console.log(list)
    return(
        <div className="list-container">
            {
                list.map((pokemon)=>{
                    console.log(pokemon.type[0])
                    return (
                        <Card key={pokemon.id}
                        type={`${pokemon.type[0].toLowerCase()}-border ${pokemon.type[0].toLowerCase()}-color-txt box`} 
                        number={`${pokemon.id}`}
                        pokemon={`./Imagenes/${pokemon.name.toLowerCase()}.png`}
                        title={`${pokemon.type[0].toLowerCase()} name-box`}
                        name={`${pokemon.name}`}/>
                    )
                })
            }
        </div>
    )
}
export default PokemonList;
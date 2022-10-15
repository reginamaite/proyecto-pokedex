import React, { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { pokemon } from "../../Database/db" 
const PokemonDetalle = ({Detalle}) =>{
    console.log(Detalle)
    return(
        <div className="Detalle-container">
            {
                Detalle.map((pokemon,key)=>{
                    console.log(pokemon.type)
                    return (
                        <Detalle key={key}
                        type={`${pokemon.type.toLowerCase()} box`} 
                        number={`${pokemon.id}`}
                        pokemon={`./Imagenes/${pokemon.name.toLowerCase()}.png`}
                        title={`${pokemon.type.toLowerCase()}-name-Detalle name-box`}
                        name={`${pokemon.name}`}/>
                    )
                })
            }
        </div>
    )
}

function Detalle() {
    const {id} = useParams()
    const [pokemonList,setPokemonList] = useState (pokemon)
    const [pokedata, setPokedata] = useState()
    
    /* 
        Filtrar el list el id del pokemon que esta definido en la variable id
     */
    useEffect(()=>{
        setPokedata(pokemonList[1])
        console.log(pokemonList)
        console.log(pokedata)
    },[])


    return (
        <>
        {(!pokedata)?<p>Cargando....</p>
        :
        <div className="card">
            <div className="card-body">
            <h1 className="card-tittle"> ← {pokedata.name}}</h1>
            <h1 className="numero"> #{id}</h1>
            <img className="bul" src="/Imagenes/bulbasaur.png" />
            <button className="botones"> Grass </button>
            <button className="botones"> Poison </button>
            <h3 className="acerca"> about</h3>
            <p>esta es la informacion del pokemon en el parrafo</p>
            <h3 className="parrafo"> Base Stats</h3>
            </div>
        </div>
        }
        </>
        
    )
}


export default Detalle
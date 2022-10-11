import { pokemon } from "../Database/db"
import React, {useState, useEffect} from 'react'

const search = () => {

 return (
    <div> search </div>
    )

const [pokemon, setPokemon] = pokemonState ([])
const [search, setSearch] = useState ("")

const searcher = (e) => {
        setSearch (e.target.value)
        console.log(e.target.value)

}


}
export default search

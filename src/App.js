import './App.css';
import {useEffect, useState} from 'react'
import Nav from './App/Pokemon-Search/Nav';
import PokemonList from './App/List/PokemonList';
import {pokemon}  from './Database/db';
import CardInformation from './App/Cards/Card-information';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function PokemonGrid (){
  const [pokemonList,setPokemonList] = useState (pokemon)
  const [pokemonOrder,setPokemonOrder] = useState ("#")
  const [pokemonSearch, setPokemonSearch] = useState ("")
  
  const changeOrder = () =>{
    if (pokemonOrder === "#"){
     let changedOrder = pokemonList.sort((a, b) => {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0
      })
      setPokemonList(changedOrder)
      setPokemonOrder("AZ")
    }
    else{
      let changedOrder = pokemonList.sort((a, b) => a.id -b.id)
      setPokemonList(changedOrder)
      setPokemonOrder("#")
    }
  }
  
  return (
    <>
        <div className='app-navbar'>
          <Nav pokemonOrder={pokemonOrder}
               changeOrder={changeOrder}
               pokemonSearch={pokemonSearch}
               search={setPokemonSearch}/>
        </div>
            
        <PokemonList 
            list={pokemonList.filter((pokemon)=>pokemon.name.toLowerCase().includes(pokemonSearch.toLowerCase()))}/>
    </>
  );
}
async function fetchData(){
  let aux=[]
    for (let index = 1; index < 20; index++) {
      await fetch("https://pokeapi.co/api/v2/pokemon/"+index)
      .then((data)=>data.json())
      .then((data)=>{
        console.log(data)
        aux.push({
          "id" : data.id,
          "name": data.name,
          "type":data.types.map((type)=>type.type.name),
          "weight": data.weight,
          "height": data.height,
          "moves": data.abilities.map((ability)=>ability.ability.name),
          "hp":data.stats[0].base_stat,
          "atk":data.stats[1].base_stat,
          "def":data.stats[2].base_stat,
          "satk":data.stats[3].base_stat,
          "sdef":data.stats[4].base_stat,
          "spd":data.stats[5].base_stat,
      })
      })
    }
    for (let index = 1; index < 20; index++) {
      await fetch("https://pokeapi.co/api/v2/characteristic/"+index)
      .then((data)=>data.json())
      .then((data)=>{
        aux[index-1].description = data.descriptions[7].description
      })
    }
    //setPokemonList(aux)
}

function App() {
  useEffect(()=>{
    
    fetchData()
  },[]
  )


  return(
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<PokemonGrid/>}/>
            <Route path='/:id' element={<CardInformation/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App;

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

function App() {
  useEffect(()=>{
    async function fetchData(){
      let aux=[]
        for (let index = 1; index < 10; index++) {
          await fetch("https://pokeapi.co/api/v2/pokemon/"+index)
          .then((data)=>data.json())
          .then((data)=>{
            console.log(data)
            aux.push({
              "id" : data.id,
              "name": data.name,
              "type":data.types.map((type)=>type.type.name),
              "weight": "6.9 kg",
              "height": "0.7 m",
              "moves": ["Chiorophyll","Overgrow"],
              "description": "There is a plant seed on its back right from the day this Pokémon is born, The seed slowly grows larger.",
              "hp":45,
              "atk":49,
              "def":49,
              "satk":65,
              "sdef":65,
              "spd":45,
          })
          })
        }
        console.log(aux)
    }
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

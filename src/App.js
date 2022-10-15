import './App.css';
import {useState,useEffect} from 'react'
import Nav from './App/Pokemon-Search/Nav';
import PokemonList from './App/List/PokemonList';
import {pokemon}  from './Database/db';
import Detalle from './App/Cards/detalle';
import { BrowserRouter, Route, Routes } from 'react-router-dom'




function PokemonGrid() {
  const [pokemonList,setPokemonList] = useState (pokemon)
  const [pokemonOrder,setPokemonOrder] = useState ("#")
  const [search, setSearch] = useState("");
  const changeOrder = () =>{
    if (pokemonOrder === "#"){
      setPokemonOrder("AZ")
      pokemonList.sort((A, B) => {
        if (A.name > B.name) return 1
        if (A.name < B.name) return -1
        return 0
      })
    }
    else{
      setPokemonOrder("#")
      pokemonList.sort((A, B) => {
        if (A.id > B.id) return 1
        if (A.id < B.id) return -1
        return 0
      })
    }
  } 
  useEffect(() => {
      console.log("el valor de pokemon order es"+pokemonOrder)
  },[pokemonOrder])


 

  return (
    <div className="App">
            <div className='app-navbar'>
              <Nav pokemonOrder={pokemonOrder}
                    search={search}
                    setSearch={setSearch}
                   changeOrder={changeOrder} />
                                 
            </div>
            
    <PokemonList list={pokemonList.
        filter((pokemon)=>pokemon.name.
            toLowerCase().includes(search.toLowerCase()))}/>
</div>
  );
}

function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<PokemonGrid/>} />
      <Route path='/:id' element={<Detalle/>} />
    </Routes>
  )
}

function App(){
  return(
    <BrowserRouter>
    <AppRoutes/>
    </BrowserRouter>
  )
}
export default App;

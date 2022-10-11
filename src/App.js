import './App.css';
import {useState,useEffect} from 'react'
import Nav from './App/Pokemon-Search/Nav';
import PokemonList from './App/List/PokemonList';
import {pokemon}  from './Database/db';
//import {search} from './components/search'; 


function App() {
  const [pokemonList,setPokemonList] = useState (pokemon)
  const [pokemonOrder,setPokemonOrder] = useState ("#")

  const changeOrder = () =>{
    if (pokemonOrder === "#"){
      setPokemonOrder("AZ")
    }
    else{
      setPokemonOrder("#")
    }
  } 
  useEffect(() => {
      console.log("el valor de pokemon order es"+pokemonOrder)
  },[pokemonOrder])



  console.log(
    pokemonList.sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      return 0
    })
  )


  return (
    <div className="App">
            <div className='app-navbar'>
              <Nav pokemonOrder={pokemonOrder}
                   changeOrder={changeOrder} />
            </div>
            
            <PokemonList list={pokemonList}/>
    </div>
  );
}

export default App;

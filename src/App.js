import './App.css';
import {useState} from 'react'
import Nav from './App/Pokemon-Search/Nav';
import PokemonList from './App/List/PokemonList';
import {pokemon}  from './Database/db';


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

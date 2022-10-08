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

  console.log(
    pokemonList.sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      return 0
    })
  )

  const paragraph = 'a,b,c';
  const regex = /[A-Z]/g;
  const found = paragraph.match(regex);
  
  console.log(found);

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

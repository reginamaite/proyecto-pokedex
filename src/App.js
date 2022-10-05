import './App.css';
import Nav from './App/Pokemon-Search/Nav';
import PokemonList from './App/List/PokemonList';




function App() {
  return (
    <div className="App">
            <div className='app-navbar'>
              <Nav/>
            </div>

            <PokemonList/>
    </div>
  );
}

export default App;

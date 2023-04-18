import './App.css';
import GameBoard from './components/GameBoard.js'
import Game from './components/Game.js';
import AddPlayerButton from './components/AddPlayerButton.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game/>
      </header>
    </div>
  );
}

export default App;

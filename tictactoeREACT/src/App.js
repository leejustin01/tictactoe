import GamePage from './pages/GamePage.js';
import './App.css';

function App() {

  let avail = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let player = [];
  let bot = [];

  return (
    <div className="App">
      <GamePage avail={avail} player={player} bot={bot}/>
    </div>
  );
}

export default App;

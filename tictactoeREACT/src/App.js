import GamePage from './pages/GamePage.js';
import './App.css';

function App() {
  let player = [];
  let bot = [];
  let avail = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const playerMove = id => {
    console.log(id);
    let pos = avail.indexOf(id, 0);
    if (pos !== -1) {
      player.push(avail[pos]);
      delete avail[pos];
    }
  }

  return (
    <div className="App">
      <GamePage playerMove={playerMove}/>
    </div>
  );
}

export default App;

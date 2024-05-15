import GamePage from './pages/GamePage.js';
import './App.css';

function App() {

  let avail = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="App">
      <GamePage avail={avail}/>
    </div>
  );
}

export default App;

import Tile from '../components/Tile.js';
import Board from '../components/Board.js';

function GamePage({ playerMove }) {
    return (
        <div>
            <Board playerMove={playerMove}/>
        </div>
    );
}

export default GamePage;
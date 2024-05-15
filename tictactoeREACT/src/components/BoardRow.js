import Tile from './Tile.js';

function BoardRow({ playerMove , ids}) {
    return (
        <tr>
            {ids.map((id, i) => <Tile tileNumber={id} playerMove={playerMove} key={i}/>)}
        </tr>
    );
}

export default BoardRow;
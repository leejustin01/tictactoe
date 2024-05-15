import Tile from './Tile.js';

function Board() {
    return (
        <table className='Board'>
            <tbody>
                <tr>
                    <Tile tileNumber={1}/>
                    <Tile tileNumber={2}/>
                    <Tile tileNumber={3}/>
                </tr>
                <tr>
                    <Tile tileNumber={4}/>
                    <Tile tileNumber={5}/>
                    <Tile tileNumber={6}/>
                </tr>
                <tr>
                    <Tile tileNumber={7}/>
                    <Tile tileNumber={8}/>
                    <Tile tileNumber={9}/>
                </tr>
            </tbody>
        </table>
    );
}

export default Board;
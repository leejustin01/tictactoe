import BoardRow from './BoardRow.js';

function Board({ playerMove }) {
    return (
        <table className='Board'>
            <tbody>
                <BoardRow playerMove={playerMove} ids={[1, 2, 3]}/>
                <BoardRow playerMove={playerMove} ids={[4, 5, 6]}/>
                <BoardRow playerMove={playerMove} ids={[7, 8, 9]}/>
            </tbody>
        </table>
    );
}

export default Board;
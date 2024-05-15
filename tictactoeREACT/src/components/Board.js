import Tile from './Tile.js';
import React, { useState } from 'react';
import { VscBlank as Blank} from "react-icons/vsc";
import { FaRegCircle as Circle } from "react-icons/fa";
import { ImCross as Cross } from "react-icons/im";

function Board({ playerMove, setIcon, icon }) {

    return (
        <table className='Board'>
            <tbody>
                <tr>
                    <Tile tileNumber={1} playerMove={playerMove} icon={icon[0]} setIcon={setIcon[0]}/>
                    <Tile tileNumber={2} playerMove={playerMove} icon={icon[1]} setIcon={setIcon[1]}/>
                    <Tile tileNumber={3} playerMove={playerMove} icon={icon[2]} setIcon={setIcon[2]}/>
                </tr>
                <tr>
                    <Tile tileNumber={4} playerMove={playerMove} icon={icon[3]} setIcon={setIcon[3]}/>
                    <Tile tileNumber={5} playerMove={playerMove} icon={icon[4]} setIcon={setIcon[4]}/>
                    <Tile tileNumber={6} playerMove={playerMove} icon={icon[5]} setIcon={setIcon[5]}/>
                </tr>
                <tr>
                    <Tile tileNumber={7} playerMove={playerMove} icon={icon[6]} setIcon={setIcon[6]}/>
                    <Tile tileNumber={8} playerMove={playerMove} icon={icon[7]} setIcon={setIcon[7]}/>
                    <Tile tileNumber={9} playerMove={playerMove} icon={icon[8]} setIcon={setIcon[8]}/>
                </tr>
            </tbody>
        </table>
    );
}

export default Board;
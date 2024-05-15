import Tile from '../components/Tile.js';
import Board from '../components/Board.js';
import React, { useState } from 'react';
import { FaRegCircle as Circle } from "react-icons/fa";
import { ImCross as Cross } from "react-icons/im";
import { VscBlank as Blank} from "react-icons/vsc";

function GamePage() {

    const [icon1, setIcon1] = useState(<Blank/>);
    const [icon2, setIcon2] = useState(<Blank/>);
    const [icon3, setIcon3] = useState(<Blank/>);
    const [icon4, setIcon4] = useState(<Blank/>);
    const [icon5, setIcon5] = useState(<Blank/>);
    const [icon6, setIcon6] = useState(<Blank/>);
    const [icon7, setIcon7] = useState(<Blank/>);
    const [icon8, setIcon8] = useState(<Blank/>);
    const [icon9, setIcon9] = useState(<Blank/>);

    const setIcon = [setIcon1, setIcon2, setIcon3, setIcon4, setIcon5, setIcon6, setIcon7, setIcon8, setIcon9];
    const icon = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9];

    let player = [];
    let bot = [];
    let avail = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const playerMove = id => {
        let pos = avail.indexOf(id);
        if (pos !== -1) {
            player.push(avail[pos]);
            avail.splice(pos, 1);
        }
        console.log(avail);
        console.log(player);
        console.log(bot);

        botMove();
    }

    const botMove = () => {
        let pos;
        do {
            pos = Math.floor(Math.random() * avail.length);
        } while (typeof avail[pos] != "number");
        const id = avail[pos];
        bot.push(id);
        avail.splice(pos, 1);
        setIcon[id - 1](<Cross/>);
    }


    return (
        <div>
            <Board playerMove={playerMove} setIcon={setIcon} icon={icon}/>
        </div>
    );
}

export default GamePage;

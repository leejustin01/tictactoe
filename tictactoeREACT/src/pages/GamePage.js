import Board from '../components/Board.js';
import React, { useState } from 'react';
import { FaRegCircle as Circle } from "react-icons/fa";
import { ImCross as Cross } from "react-icons/im";
import { VscBlank as Blank} from "react-icons/vsc";
import wins from '../Wins.js';
import Selection from '../components/Selection.js';

function GamePage({ avail, player, bot }) {

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


    const [playing, setPlaying] = useState(true);

    const [playerIcon, setPlayerIcon] = useState(<Circle/>);
    const [botIcon, setBotIcon] = useState(<Cross/>);

    const [gameStarted, setGameStarted] = useState(false);


    const playerMove = id => {
        setGameStarted(true);
        if (!playing) return;
        let pos = avail.indexOf(id);
        if (pos !== -1) {
            player.push(avail[pos]);
            avail.splice(pos, 1);
            setIcon[id - 1](playerIcon);
            checkPlayerWin();
            botMove();
        }
    }

    const botMove = () => {
        if (!playing) return;
        let pos;
        if (avail.length <= 0) return;
        do {
            pos = Math.floor(Math.random() * avail.length);
        } while (typeof avail[pos] != "number");
        const id = avail[pos];
        bot.push(id);
        avail.splice(pos, 1);
        setIcon[id - 1](botIcon);
        checkBotWin();
    }

    const checkPlayerWin = () => {
        for (let win of wins) {
            let playerWin = player.indexOf(win[0]) !== -1 &&
                            player.indexOf(win[1]) !== -1 &&
                            player.indexOf(win[2]) !== -1;
            if (playerWin) {
                setPlaying(false);

                // will display win message in the future
                console.log("You Win!");
            }
        }
    }

    const checkBotWin = () => {
        for (let win of wins) {
            let botWin = bot.indexOf(win[0]) !== -1 &&
                         bot.indexOf(win[1]) !== -1 &&
                         bot.indexOf(win[2]) !== -1;
            if (botWin) {
                setPlaying(false);

                // will display lose message in the future
                console.log("You Lose.");
            }
        }
    }

    return (
        <div>
            <h1>Welcome to Tic-Tac-Toe!</h1>
            <p>Would you like to play as X or O?</p>
            <Selection setPlayerIcon={setPlayerIcon} setBotIcon={setBotIcon} gameStarted={gameStarted}/>
            <Board playerMove={playerMove} setIcon={setIcon} icon={icon}/>
        </div>
    );
}

export default GamePage;

import React, { useState } from 'react';
import { FaRegCircle as Circle } from "react-icons/fa";
import { ImCross as Cross } from "react-icons/im";
import { VscBlank as Blank} from "react-icons/vsc";

function Tile({ tileNumber, playerMove, icon, setIcon }) {

    const handleClick = () => {
        playerMove(tileNumber);
        if (icon.type === Blank) {
            setIcon(<Circle />);
        }
    };

    return (
        <td onClick={handleClick}>{icon}</td>
    )
}



export default Tile;
import React, { useState } from 'react';
import { FaRegCircle as Circle } from "react-icons/fa";
import { ImCross as Cross } from "react-icons/im";
import { VscBlank as Blank} from "react-icons/vsc";

function Tile({ tileNumber }) {
    const [icon, setIcon] = useState(<Blank/>);

    const handleClick = () => {
        if (icon.type !== Cross) {
            setIcon(<Circle />);
        }
    };

    return (
        <td onClick={handleClick}>{icon}</td>
    )
}



export default Tile;
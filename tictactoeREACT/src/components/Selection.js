import { FaRegCircle as Circle } from "react-icons/fa";
import { ImCross as Cross } from "react-icons/im";

function Selection({ setPlayerIcon, setBotIcon, gameStarted }) {

    const circleClicked = () => {
        if (gameStarted) return;
        setPlayerIcon(<Circle/>);
        setBotIcon(<Cross/>);
    }

    const crossClicked = () => {
        if (gameStarted) return;
        setPlayerIcon(<Cross/>);
        setBotIcon(<Circle/>);
    }

    return (
        <div>
            <Circle onClick={circleClicked} id="select-circle"/>
            <Cross onClick={crossClicked} id="select-cross"/>
        </div>
    );
}

export default Selection;
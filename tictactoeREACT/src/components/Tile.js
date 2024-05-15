function Tile({ tileNumber, playerMove, icon, setIcon }) {

    const handleClick = () => {
        playerMove(tileNumber);
    };

    return (
        <td onClick={handleClick}>{icon}</td>
    )
}



export default Tile;
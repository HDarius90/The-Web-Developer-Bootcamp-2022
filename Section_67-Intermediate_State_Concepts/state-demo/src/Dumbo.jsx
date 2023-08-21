import { useState } from "react";
export default function Dumbo() {
    function initGameBoard() {
        console.log('MAKING INIT GAMEBOARD');
        return Array(5000)
    }
    const [board, setBoard] = useState(initGameBoard);
    return (
        <div>
            <button onClick={() => setBoard("hello")}>Create new Game</button>
        </div>
    )
}
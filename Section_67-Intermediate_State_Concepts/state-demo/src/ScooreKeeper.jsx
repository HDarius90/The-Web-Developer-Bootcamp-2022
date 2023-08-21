import { useState } from "react";
export default function ScoreKeeper({ numPlayers = 2, target = 10 }) {
    /*     const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 })
        function incrementP1() {
            setScores((currentScore) => {
                return { ...currentScore, p1Score: currentScore.p1Score + 1 }
            })
        }
        function incrementP2() {
            setScores((currentScore) => {
                return { ...currentScore, p2Score: currentScore.p2Score + 1 }
            })
        }
        return (
            <div>
                <p>Player 1: {scores.p1Score}</p>
                <p>Player 2: {scores.p2Score}</p>
                <button onClick={incrementP1}>+1 Player 1</button>
                <button onClick={incrementP2}>+1 Player 2</button>
            </div> 
        )*/
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));

    function addOne(index) {
        setScores((currentScore) => {
            return currentScore.map((score, i) => {
                if (i === index) {
                    return score + 1;
                } else {
                    return score;
                }
            })
        })
    }

    const reset = () => {
        setScores(new Array(numPlayers).fill(0));
    }

    return (
        <div>
            <ul>
                {scores.map((score, index) => (
                    <div key={index}>
                        <li style={{ display: 'inline' }}>Player{index + 1}: {score}</li>
                        <button onClick={() => addOne(index)}>+1</button>
                        {score < target ? "" : <span>WINNER!</span>}
                    </div>

                ))}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>


    )

}
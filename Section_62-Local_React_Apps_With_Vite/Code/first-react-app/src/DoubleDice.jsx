export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const isWinner = num1 === num2;
    const style = { color: isWinner ? 'green' : 'red' }
    return (
        <div style={style}>
            <h2>Double Dice Game</h2>
            {num1 === num2 && <h3>You Win!</h3>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    )
}
// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return (
//         <>
//             <h2>Double Dice Game</h2>
//             {num1 === num2 ? <h3>You Win!</h3> : <h3></h3>}
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </>
//     )
// }
// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     const result = num1 === num2 ? 'You Win!' : 'You Loose';
//     return (
//         <>
//             <h2>Double Dice Game</h2>
//             <p>{result}</p>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </>
//     )
// }
import { useState } from "react";
export default function Counter() {
    const [num, setNum] = useState(0)

    function addOne() {
        setNum(num + 1);
    }
    function addThree() {
        setNum((currentNum) => (currentNum + 1));
        setNum((currentNum) => (currentNum + 1));
        setNum((currentNum) => (currentNum + 1));

    }
    return (
        <div>
            <p>Counter: {num}</p>
            <button onClick={addOne}>Add One</button>
            <button onClick={addThree}>Add Three</button>
        </div>
    )
}
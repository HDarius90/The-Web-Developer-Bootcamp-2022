import { useState } from "react"
export default function ToggleCounter() {
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);
    const countHandler = () => {
        setCount(count + 2);
    }
    const clickHandler = () => {
        setIsHappy(!isHappy)
    }
    return (
        <div>
            <p onClick={clickHandler}>
                {isHappy ? "😂" : "😪"}
            </p>
            <p>Toggle Counter: {count}</p>
            <button onClick={countHandler}>+</button>
        </div>
    )
}
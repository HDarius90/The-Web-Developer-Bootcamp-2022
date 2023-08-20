import { useState } from "react";

export default function Clicker2() {
    const [num, setNum] = useState(0);
    const increment = () => {
        setNum(num + 1);

    }
    return (
        <div>
            <p>Click count: {num}</p>
            <button onClick={increment}>Click</button>
        </div>
    )
}
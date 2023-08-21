import { useState } from "react";
import './ColorBox.css'

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

export default function ColorBox({ colors }) {
    const [color, setColor] = useState(getRandomElement(colors));
    const style = {
        backgroundColor: color
    }
    const changeColor = () => {
        setColor(getRandomElement(colors));
    }
    return (
        <div className="ColorBox" style={style} onClick={changeColor}></div>
    )
}

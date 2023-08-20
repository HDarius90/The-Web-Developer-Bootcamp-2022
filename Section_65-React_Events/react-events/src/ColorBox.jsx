import { useState } from "react";
import './ColorBox.css'

export default function ColorBox({ colors }) {
    const getRandIdx = () => { return Math.floor(Math.random() * colors.length)} 
    const [color, setColor] = useState(colors[getRandIdx()]);
    const style = {
        backgroundColor: color
    }
    const changeColor = () => {
        setColor(colors[getRandIdx()]);
    }
    return (
        <div style={style} onClick={changeColor}></div>
    )
}

import { useState } from "react"
export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const clickHandler = () => {
        setIsHappy(!isHappy)
    }
    return <p onClick={clickHandler}>{isHappy ? "😂" : "😪"}</p>
}
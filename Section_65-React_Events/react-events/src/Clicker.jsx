
export default function Clicker({ message, buttonText }) {
    const clickHandler = () => {
        alert(message);
    }
    return (
        <div>
            {/* <p onMouseOver={clickHandler}>Click the button</p> */}
            <button onClick={clickHandler}>{buttonText}</button>
        </div>
    )
}
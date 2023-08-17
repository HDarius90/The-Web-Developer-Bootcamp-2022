export default function ListPicker ({values}) {
const randIdx = Math.floor(Math.random() * values.length)
const randElement = values[randIdx];
return (
    <>
    <h1>All the values: {values}</h1>
    <h2>Random element is: {randElement}</h2>
    </>
)
}
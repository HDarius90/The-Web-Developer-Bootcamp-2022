import { useState } from "react"
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from "uuid";
export default function ShoppingList() {
    const [list, setList] = useState([
        { id: 1, product: 'apple', qty: 2 },
        { id: 2, product: 'banana', qty: 3 },
        { id: 3, product: 'kiwi', qty: 4 }
    ]);
    const addItem = (item) => {
        setList((currentList) => {
            return [
                ...currentList,
                { ...item, id: uuid() }
            ]
        })
    }
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {list.map((i) => <li key={i.id}>{i.product} - {i.qty}</li>)}
            </ul>
            <ShoppingListForm addItem={addItem} />
        </div>
    )
}
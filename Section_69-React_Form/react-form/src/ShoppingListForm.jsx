import { useState } from "react";
export default function ShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({ product: "", qty: 0 });
    const changeHandler = (evt) => {
        setFormData((currentData) => {
            return {
                ...currentData,
                [evt.target.name]: evt.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData)
        setFormData({ product: "", qty: 0 })
    };
    return (
        <form>
            <label htmlFor="product">Product Name</label>
            <input
                type="text"
                id="product"
                name="product"
                placeholder="product name"
                value={formData.product}
                onChange={changeHandler} />
            <label htmlFor="qty">Product Quantity</label>
            <input
                type="text"
                id="qty"
                name="qty"
                placeholder="product quantity"
                value={formData.qty}
                onChange={changeHandler} />
            <button onClick={handleSubmit}>Add Item</button>
        </form>
    )
}
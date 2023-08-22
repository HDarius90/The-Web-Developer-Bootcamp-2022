import { useState } from "react";
export default function ShoppingListForm() {
    const [formData, setFormData] = useState({ product: "", qty: 0 });
    const changeHandler = (evt) => {
        setFormData((currentData) => {
            return { ...currentData, [evt.target.name]: evt.target.value }
        })
    }
    return (
        <div>
            <h1>Product name: {formData.product}</h1>
            <h2>Product quantity: {formData.qty}</h2>
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
            <button>Add Item</button>
        </div>
    )
}
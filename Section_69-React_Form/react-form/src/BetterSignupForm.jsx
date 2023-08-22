import { useState } from "react"
export default function SignupForm() {
    const [formData, setFormData] = useState({ firstName: "", lastName: "" });
    const changeHandler = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData((currData) => {
            currData[changedField] = newValue;
            return { ...currData }
        });
    };
    const submitForm = () => {
        console.log(formData);
    }

    return (
        <div>
            <label htmlFor="firstname">Enter Firstname</label>
            <input
                type="text"
                placeholder="firstname"
                value={FormData.firstName}
                onChange={changeHandler}
                id="firstname"
                name="firstName" />

            <label htmlFor="lastName">Enter Lastname</label>

            <input
                type="text"
                placeholder="lastname"
                value={FormData.lastName}
                onChange={changeHandler}
                id="lastname"
                name="lastName" />

            <label htmlFor="password">Enter Password</label>

            <input
                type="password"
                placeholder="password"
                value={FormData.password}
                onChange={changeHandler}
                id="password"
                name="password" />
            <button onClick={submitForm}>Submit</button>
        </div>
    )
}
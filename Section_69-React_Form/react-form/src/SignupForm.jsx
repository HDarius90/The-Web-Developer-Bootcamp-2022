import { useState } from "react"
export default function SignupForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const updateFirstName = (evt) => {
        setFirstName(evt.target.value)
    }
    const updateLastName = (evt) => {
        setLastName(evt.target.value)
    }
    const submitForm = () => {
        console.log(firstName, lastName);
    }

    return (
        <div>
            <label htmlFor="firstname">Enter Firstname</label>
            <input
                type="text"
                placeholder="firstname"
                value={firstName}
                onChange={updateFirstName}
                id="firstname" />
            <input
                type="text"
                placeholder="lastname"
                value={lastName}
                onChange={updateLastName}
                id="lastnaem" />
            <button onClick={submitForm}>Submit</button>
        </div>
    )
}
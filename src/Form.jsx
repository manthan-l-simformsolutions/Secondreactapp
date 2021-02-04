import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState("");
    const [fullName, setFullname] = useState();
    const [lastname, setLastName] = useState("");
    const [lastnamenew, setLastNameNew] = useState();
    const InputEvent = (event) => {
        setName(event.target.value)
    }
    const InputEventTwo = (event) => {
        setLastName(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        setFullname(name);
        setLastNameNew(lastname);
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <h1>Hello {fullName} {lastnamenew}</h1>
                    <input type='text' placeholder='Enter your name' onChange={InputEvent} value={name} />
                    <input type='text' placeholder='Enter your Last name' onChange={InputEventTwo} value={lastname} />
                    <button type='submit'>Submit Me 👍</button>
                </div>
            </form>
        </>
    )
}
export default Form;
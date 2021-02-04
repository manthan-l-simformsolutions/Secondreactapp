import React, { useState } from 'react';

function Form2() {
    const [fullname, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
    });
    const InputEvent = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)

        // const value = event.target.value;
        // const name = event.target.name;

        const {value, name} = event.target;
        setFullName((preValue) => {
            console.log(preValue);

            return{
                ...preValue,
                [name]:value,
            }
            // if(name === 'fname'){
            //     return{
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,  
            //     };
            // }
            // else if(name === 'lname'){
            //     return{
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,  
            //     };
            // }
            // else if(name === 'email'){
            //     return{
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,   
            //     };
            // } 

        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        alert("From Submited...");
    }
    
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <h1>Hello {fullname.fname} {fullname.lname}</h1>
                    <p>{fullname.email}</p>
                    <input type='text'
                        placeholder='Enter your name'
                        name='fname'
                        onChange={InputEvent}
                        value={fullname.fname}
                     />
                    <input type='text'
                        placeholder='Enter your Last name'
                        name='lname' 
                        onChange={InputEvent} 
                        value={fullname.lname}
                    />
                    <input type='email'
                        placeholder='Enter your email'
                        name='email' 
                        onChange={InputEvent} 
                        value={fullname.email}
                    />
                    <button type='submit'>Submit Me 👍</button>
                </div>
            </form>
        </>
    )
}
export default Form2;
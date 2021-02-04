import React, { useContext } from 'react';
import ComC from './ComC';
import { FirstName, LastName } from "./App";



const ComB = () => {

    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (
        <>
            <h1>ComB: My name is {fname} {lname}</h1>
            <ComC />
        </>
    )
}

export default ComB;
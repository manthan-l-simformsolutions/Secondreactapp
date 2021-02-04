import React, { useState } from 'react';

function DigiClock() {

    //const state = useState();

    const [count, setCount] = useState(0);
    let currtime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(currtime);
    const Time = () => {
        currtime = new Date().toLocaleTimeString();
        setTime(currtime);
    }
    setInterval(Time, 1000);
    return (
        <>
            <h1>{time}</h1>
            {/* <button onClick={Time} >Get Time</button> */}
        </>
    )
}
export default DigiClock;
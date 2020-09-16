import React, {useState} from 'react';

let temp, setTemp;

function addTemp() {
    setTemp(temp+1);
}

function subTemp() {
    setTemp(temp-1);
}

function Temp() {
    [temp, setTemp] = useState(72);
    return (
        <div>
            <h1>Welcome to Temprature section</h1>
            <p>Temprature Value : {`${temp} degree celcius`}</p>
            <button onClick={subTemp}>-</button>
            <button onClick={addTemp}>+</button>
        </div>
    );
}

export default Temp;
import React, {useState} from 'react';
import './Light.css';

let light, setLight;

function lightOn() {
  setLight(true);
  console.log('light on');
}

function lightOff() {
  setLight(false);
  console.log('light off');
}

function Light() {
  [light, setLight] = useState(false);
    return (
        <div className={light? "yellow": "dark"}>
            <h1>Welcome to Netflex</h1>
            <p>List of Top 5 series:</p>
            <ol>
              <li>Netflex</li>
              <li>Fast and Furius</li>
              <li>Toma and Jerry</li>
              <li>Game of Thrones</li>
              <li>Sacret Games</li>
            </ol>
            <br/>
            <button onClick={lightOn}>Light On</button>
            <button onClick={lightOff}>Light Off</button>
        </div>
    )
}

export default Light;

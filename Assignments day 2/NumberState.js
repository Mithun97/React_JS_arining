import React, { useState } from 'react';

function NumberState(){
    let [number,setNumber] = useState(0);
    function incrementCounter(){
        setNumber(number+1);
    }
    function decrementCounter(){
        if (number >0) {
            setNumber(number-1);
        }
    }
    function reset(){
        setNumber(0);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button className='Colour-Change' onClick={incrementCounter}>IncrementCounter</button><br></br><br></br>
            <button className='Colour-Change' onClick={decrementCounter}>DecrementCounter</button><br></br><br></br>
            <button className='Colour-Change' onClick={reset}>Reset</button>
        </div>
    );

}

export default NumberState;
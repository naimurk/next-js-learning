"use client"
import { useState } from "react";

const Counter = () => {
    const [counter , setCounter] = useState(0)
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=> setCounter((prev)=> prev + 1)}>increase</button>
            <button onClick={()=> setCounter((prev)=> prev - 1)}>deacrease</button>
            <button></button>
        </div>
    );
};

export default Counter;
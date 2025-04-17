import React, { useState } from 'react'
import useCounter from './hooks/useCounter'

// we are doing code duplicacy in CustomCounterOne.js and CustomCounterTwo.js so we are using customHook
function CustomCounterOne() {
    // const [count,setCount] = useState(0)
    // const increment = () =>{
    //     setCount(prevCount => prevCount + 1)
    // }
    // const decrement = () =>{
    //     setCount(prevCount => prevCount - 1)
    // }
    // const reset = () =>{
    //     setCount(0)
    // }
    // Above code is without custom Hook and below code is with custom Hook 
    const [count,increment,decrement,reset] = useCounter(0,1)
  return (
    <div>
        <h1>Counter One = {count}</h1>
        <div>
            <button onClick={increment}>Increment</button>
        </div>
        <div>
            <button onClick={decrement}>Decrement</button>
        </div>
        <div>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default CustomCounterOne
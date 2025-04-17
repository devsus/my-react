import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const incrementFive = () =>{
        for(let i=0;i<5;i++){
           //setCount(count+1) // This line increment by 1
           setCount(prevCount => prevCount + 1) // This line increment by 5 it will take prevState
        }
    }
    return (
        <div>
            <div>
                Count : {count}
            </div>

            <button onClick={() => setCount(initialCount)}>Reset</button>
            {/* <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button> */}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>

        </div>
    )
}

export default HookCounterTwo
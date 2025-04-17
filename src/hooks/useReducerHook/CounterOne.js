import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;

        case 'reset':
            return initialState

        default:
            return state;
    }
}

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState)  // here dispatch is initialize reducer method

    return (
        <div>
            <div>Count : {count}</div>
            <div>
                <button onClick={() => dispatch('increment')}>Increment</button>
            </div>
            <div>
                <button onClick={() => dispatch('decrement')}>Decrement</button>
            </div>
            <div>
                <button onClick={() => dispatch('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default CounterOne
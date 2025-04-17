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

function HookCounterThree() {
    const [count, dispatch] = useReducer(reducer, initialState)  // here dispatch is initialize reducer method
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState) // with multiple reducer 

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

            <div>Count Two : {countTwo}</div>
            <div>
                <button onClick={() => dispatchTwo('increment')}>Increment</button>
            </div>
            <div>
                <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            </div>
            <div>
                <button onClick={() => dispatchTwo('reset')}>Reset</button>
            </div>

        </div>
    )
}

export default HookCounterThree
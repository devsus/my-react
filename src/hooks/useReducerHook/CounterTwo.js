import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer } from 'react'

//This is object declaration using 
const initialState = {
  firstCounter:0,
  secondCounter:5 
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value};

        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value};

        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value};

        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value};

        case 'reset':
            return initialState

        default:
            return state;
    }
}

function CounterTwo() {
const [count, dispatch] = useReducer(reducer, initialState)  // here dispatch is initialize reducer method and initialState conatining firstCounter

    return (
        <div>
            <div>Count : {count.firstCounter}</div>
            <div>Count : {count.secondCounter}</div>
            <div>
                <button onClick={() => dispatch({type:'increment',value: 1})}>Increment 1</button>
            </div>
            <div>
                <button onClick={() => dispatch({type:'decrement',value: 1})}>Decrement 1</button>
            </div>
            <div>
                <button onClick={() => dispatch({type:'increment',value: 5})}>Increment 5</button>
            </div>
            <div>
                <button onClick={() => dispatch({type:'decrement',value: 5})}>Decrement 5</button>
            </div>
            {/*  */}
            <div>
                <button onClick={() => dispatch({type:'increment2',value: 1})}>Increment Counter 2</button>
            </div>
            <div>
                <button onClick={() => dispatch({type:'decrement2',value: 1})}>Decrement Counter 2</button>
            </div>
            <div>
                <button onClick={() => dispatch({type:'reset'})}>Reset</button>
            </div>
        </div>
    )
}

export default CounterTwo
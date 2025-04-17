import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

            {/* We can use arrow function here also and we can pass any number of parameter in method*/}
            <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}
export default ChildComponent
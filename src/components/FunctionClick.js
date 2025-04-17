import { render } from '@testing-library/react'
import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Clicked on Button')
    }
    return (
        <div>
            <div>
                <button onClick={clickHandler}> Click</button>
                 {/* if you will use onClick={clickHandler()} it will automatic click in page refresh*/}

            </div>
        </div>
    )
}
export default FunctionClick
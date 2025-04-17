import React, { useMemo, useState } from 'react'

function CounterMemo() {
    const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)
    const incrementOne = () =>{
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () =>{
        setCounterTwo(counterTwo + 1)
    }
    // const isEven = () =>{
    //     return counterOne % 2 == 0
    // }
    // const isEven = () =>{
    //     let i =0
    //     while(i<2000000000)
    //         i++
    //     return counterOne % 2 == 0
    // }
    // Above code is re-rendering and making slow to application so we need to use useMemo in below code counterTwo is fast now
    
    const isEven = useMemo(() =>{
        let i =0
        while(i<2000000000)
            i++
        return counterOne % 2 == 0
    },[counterOne])  

  return (
    <div>
        <div>
            <button onClick={incrementOne}>Counter One - {counterOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>
        <div>
            <button onClick={incrementTwo}>CounterTwo - {counterTwo}</button>
        </div>
    </div>
  )
}

export default CounterMemo
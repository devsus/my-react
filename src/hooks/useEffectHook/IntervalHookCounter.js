import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {

    const [count,setCount] = useState(0)

    const tick = () =>{
        //setCount(count +1)
        setCount(prevCount=>prevCount +1)
    }
    
    useEffect(()=>{
       const interval = setInterval(tick,1000) // here useEffect will work as a componentDidMount
       return () =>{
        clearInterval(interval)
       }
    },[]) // if will use setCount(prevCount=prevCount +1) so no need to here  === },[count])

    // useEffect(()=>{
    //     function doSomething(){
    //         console.log(someProp)
    //     }
    //     doSomething()
    //    const interval = setInterval(tick,1000) // here useEffect will work as a componentDidMount
    //    return () =>{
    //     clearInterval(interval)
    //    }
    // },[someProp])
    // we calll function in useEffect like above code 

  return (
    <div>{count}</div>
  )
}

export default IntervalHookCounter
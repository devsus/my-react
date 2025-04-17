import React, { useState } from 'react'

// here no need to render()
function HookCounter() {
    const [count,setCount] = useState(0) // here 0 is initial value 
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count {count}</button>
    </div>
  )
}
export default HookCounter
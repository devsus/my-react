import React, { useState, useEffect } from 'react'

function HookCounteOner() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState('')
  useEffect(() => {
    console.log('useEffect - Updating docuemnt title ')
    document.title = `You clicked ${count} times ! `  // This will change on chrome tab title
  },[count]) // Now this line will not render again and again .... // useEffect is call in every single render so we can prevent from it .
  {/* What is a "conditionally run useEffect"?
In React, useEffect() runs after every render by default — but you can control when it runs using the dependency array ([]).

This is what we call conditionally running a useEffect.*/}
  return (
    <div>
      <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
      </div>
      <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
      </div>
    </div>

  )
}

export default HookCounteOner
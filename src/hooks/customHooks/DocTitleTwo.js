import React, { useEffect, useState } from 'react'
import useDocumentTitle from './hooks/useDocumentTitle'

function DocTitleTwo() {
    const [count,setCount] = useState(0)
    // useEffect(()=>{
    //     document.title = `Count ${count}`
    // },[count])
    // Above code is direct using defined by React but below line is our own custom Hook
    useDocumentTitle(count)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleTwo
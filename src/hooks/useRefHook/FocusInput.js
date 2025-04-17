import React, { useEffect,useRef } from 'react'

function FocusInput() {

    const inputRef = useRef(null)

    // in below code arrow function is first argument, and second argument is [] empty array 
    useEffect(()=>{
        //focus the input element
        inputRef.current.focus()  // it will directly focus on text box while loading web page 

    },[])
  return (
    <div>
        <input ref={inputRef} type='text'/>
    </div>
  )
}

export default FocusInput
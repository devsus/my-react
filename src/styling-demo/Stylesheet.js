import React from 'react'
import './myStyle.css' 

function Stylesheet(props) {   //Getting props values from App.js <Stylesheet/> if true comes then color will appear
    let className = props.primary ? 'primary' : ' '
  return (
    <div>
        <h2 className={`${className} font-xl`}>Stylesheet</h2>
    </div>
    
  )
}

export default Stylesheet
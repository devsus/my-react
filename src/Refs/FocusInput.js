import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.componentRef = React.createRef()
    }
    clickHandler =()=>{
      this.componentRef.current.focusInput()  // This will focus on input box after click on button 
    }
  render() {
    return (
      <div>
        <Input ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
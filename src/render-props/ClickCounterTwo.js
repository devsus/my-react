import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    // constructor(props) {
    //   super(props)
    //   this.state = {
    //      count:0
    //   }
    // }
    // incrementCount=()=>{
    //     this.setState(prevState=>{
    //      return {count:prevState.count + 1}
    //     })
    // }
    // Pasted above code in Counter.js 
  render() {
    //const {count} = this.state // here will get data from state
    const {count,incrementCount} = this.props  // will get Data from props 
    return (
      <button onClick={incrementCount}>Clicked {count} times </button>
    )
  }
}

export default ClickCounterTwo
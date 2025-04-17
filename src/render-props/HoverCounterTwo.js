import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
  //  constructor(props) {
  //     super(props)
  //     this.state = {
  //        count:0
  //     }
  //   }
  //   incrementCount=()=>{
  //       this.setState(prevState=>{
  //         return {count: prevState.count+1}
  //       })

  //   }
  // Pasted above code in Counter.js 
  render() {
    //const {count} = this.state // its is called destructured  and getting data from constructor state
    const {count,incrementCount} = this.props // its is called destructured  and getting data from App.js props
    return (
      <h1 onMouseOver={incrementCount}>Hovered {count} times </h1>
    )
  }
}

export default HoverCounterTwo
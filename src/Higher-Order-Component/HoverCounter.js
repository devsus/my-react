import React, { Component } from 'react'
import withCounter from './withCounter'

export class HoverCounter extends Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //        count: 0
  //     }
  //   }
  //   incrementCount =()=>{
  //       this.setState(prevState =>{
  //         return { count: prevState.count+1}
  //       })

  //   }
  // render() {
  //   const {count} = this.state
  //   return (
  //     <h3 onMouseOver={this.incrementCount}>{this.props.name}  Hovered counter {count} times </h3>
  //   )
  // }
  render() {
    const { count, incrementCount } = this.props
    return (
      <h2 onMouseOver={incrementCount}>Hoverd {count} times </h2>
    )
  }
}
//export default HoverCounter
export default withCounter(HoverCounter,10)
// here we are exporting ClickCounter with the help of HoverCounter its code reusability
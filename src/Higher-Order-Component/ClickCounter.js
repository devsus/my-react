import React, { Component } from 'react'
import withCounter from './withCounter'

export class ClickCounter extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //      count:0
  //   }
  // }
  // incrementCount = () =>{
  //     this.setState(prevState =>{
  //         return {count:prevState.count+1}
  //     })
  // }
  // render() {
  //   const { count } = this.state
  //   return (
  //     <div>
  //       <button onClick={this.incrementCount}>{this.props.name} Click {count} Times</button>
  //     </div>
  //   )
  // }
  render() {
    const { count, incrementCount } = this.props
    return (
      <button onClick={incrementCount}> {this.props.name} Clicked {count} times</button>
    )
  }
}

//export default ClickCounter
export default withCounter(ClickCounter,5)  // withCounter.js will apply same thing on HoverCounter.js
// here we are exporting ClickCounter with the help of UpdatedComponent its code reusibility
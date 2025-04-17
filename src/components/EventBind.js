import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
      this.state = {
         message: 'Hello'
      }
      //this.clickHandler = this.clickHandler.bind(this) // This is the part of 3rd approach
    }
    
    // clickHandler(){
    //     // below code will not work without bind() in onClick
    //     this.setState({
    //         message: 'Good Bye !'
    //     })
        
    //     console.log(this)
    //     //Here this key word will be show undefined thats why we need to bind event in react JS
    //     // For binding we can use bind() on onClick event and uncomment this.setState code 
    // }

    // Now we are going to use Final approach
    clickHandler = () =>{
        this.setState({
            message : 'Good Bye !'
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* This is the first approch */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}

        {/* following is the second approach is Arrow function*/}
        {/* <button onClick={()=>this.clickHandler()}>Click Me</button> */}

        {/* Now its is 3rd Approach */}
        {/* <button onClick={this.clickHandler}>Click Me</button> */}

        {/* Final approach is  */}
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}
export default EventBind
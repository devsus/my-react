import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment() {
        //this.state.count = this.state.count + 1 // it will show only on console 
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log('Call back value ', this.state.count) }) // This is call back function
          this.setState((prevState, props) =>({
            count:prevState.count+1
          }))    
        console.log(this.state.count) // This is a Synchronus console log
    }
    incrementFive(){
       this.increment()
       this.increment()
       this.increment()
       this.increment()
       this.increment() 
    }  
    render() {
        return (
            <div>
                <div>Counter - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment -{this.state.count}</button>
            </div>
        )
    }
}
export default Counter
import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentName: 'Parent'
        }
        // we are binding here
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName) {
        // alert('Hello ' + this.state.parentName)
        alert(`Hello ${this.state.parentName} from  ${childName}`) // we can do like this also 
    }
    render() {
        return (
           <div>
            {/* Incliding Child component in Parent component */}
            <ChildComponent greetHandler={this.greetParent}/> 
           </div>
        )
    }
}

export default ParentComponent
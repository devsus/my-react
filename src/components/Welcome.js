import React, { Component } from "react";

{/*class Welcome extends Component {

    render() {
        //Getting props from App.js <Welcome name="Bruce" heroName="Batman"/> 
        return (
            <h1>Class Component {this.props.name} Willan is {this.props.heroName}</h1>
        )
    }


}*/}

// We can distruct Component in followig way 
class Welcome extends Component {
    render() {
        //Getting props from App.js <Welcome name="Bruce" heroName="Batman"/> 
        const {name,heroName} = this.props
        //const {state1,state12} = this.state // in case of state
        return (
            <h1>Class Component {name} Willan is {heroName}</h1>
        )
    }


}

export default Welcome
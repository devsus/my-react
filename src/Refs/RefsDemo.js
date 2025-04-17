import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        //Second approach  call back Ref
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }
    componentDidMount() {
        //this.inputRef.current.focus() // it will directly focus on input after refresh the page 
        //console.log(this.inputRef) // it will all the Object in console related to input 

        //Following is second approach
        if(this.cbRef){
            this.cbRef.focus() // Now it will focus on second text box 
        }
    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <div>
                    <input type='text' ref={this.inputRef}></input>
                </div>
                <div>
                    <input type='text' ref={this.setCbRef}></input>
                </div>
                <div>
                    <button onClick={this.clickHandler}>Click One</button>
                </div>
            </div>
        )
    }
}

export default RefsDemo
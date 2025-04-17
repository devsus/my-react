import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        //------------------1-------------------------------
        //Inside JSX if else condition is not working 
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Devendra</div>
        //     )
        // }else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
        //------------------2-------------------------------
        // return (
        //     <div>
        //       <div>Welcome Devendra</div>
        //       <div>Welcome Guest</div>
        //     </div>
        // )
        //-------------3---Following is element varibale approach---------------------------------
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Vishwas</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        //----------------------4 We can use Ternory operator also----------------------
        // return (
        //     this.state.isLoggedIn ?(<div>Welcome Vishwas</div>) :( <div>Welcome Guest</div>)
        // )
        //------------------5 Short Circuit method--------------------------------------
        return this.state.isLoggedIn && <div>Welcome Vishwas</div>
    }
}

export default UserGreeting
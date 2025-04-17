import React, { Component } from 'react'

export class User extends Component {
  render() {
    return (
      <div>
        {/* Will render JSX Value here */}
        {/* {this.props.name(true)} */}
        {this.props.render(true)}  {/* This will work alos fine  */}
        
      </div>
    )
  }
}

export default User
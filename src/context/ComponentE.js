import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './userContext';

export class ComponentE extends Component {
  static contextType = UserContext
  render() {
    return (
      <div>
        Component E Context {this.context}
      <ComponentF/>
      </div>
    )
  }
}

//ComponentE.contextType = UserContext  // getting it from userContext.js  you can declare as static this one also
export default ComponentE
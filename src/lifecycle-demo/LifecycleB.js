import React, { Component } from 'react'

class LifecycleB extends Component {
    // 1st Method
    constructor(props) {
      super(props)
      this.state = {
         name: 'Vishvash'
      }
      console.log('LifecycleB COntstructor')
    }
    // 2nd Method
    static getDerivedStateFromProps(){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('LifeCycleB getSnapshotBeforeUpdate')
      return null
    }
    componentDidUpdate(){
        console.log('LIfeCycleB componentDidUpdate')
    }
    // 3rd Method
  render() {
    console.log('LifeCycleB render')
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB
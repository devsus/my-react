import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    // 1st Method
    constructor(props) {
        super(props)
        this.state = {
            name: 'Vishvash'
        }
        console.log('LifecycleA COntstructor')
    }
    // 2nd Method
    static getDerivedStateFromProps() {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('LifeCycleA getSnapshotBeforeUpdate')
      return null
    }
    componentDidUpdate(){
        console.log('LIfeCycleA componentDidUpdate')
    }
   changeState=()=>{
    this.setState({
        name:'CodeEvolution'
    })

   }
    // 3rd Method
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
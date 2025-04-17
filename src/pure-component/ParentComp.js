import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from '../memos/MemoComp'

class ParentComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
       name: 'Vishwas'
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        name:'Vishwas'
      })
    },2000)
  }
  render() {
    console.log('*******************Parent Component Render**************************')
    return (
      <div>
        Parent Component
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}

        {/* Here we are using Memo */}
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
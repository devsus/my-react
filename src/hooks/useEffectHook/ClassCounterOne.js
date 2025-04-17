import React, { Component } from 'react'

class ClassCounterOne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      name: ''
    }
  }
  componentDidMount() {
    console.log('Component mounting ....!')
    document.title = `Clicked ${this.state.count} times`  // mount method mount only means while page load its working .
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {  // useEffect is call in every single render so we can prevent from it .
      console.log('updating document title ...!')
      document.title = `Clicked ${this.state.count} times`

    }
    {/* What is a "conditionally run useEffect"?
In React, useEffect() runs after every render by default — but you can control when it runs using the dependency array ([]).

This is what we call conditionally running a useEffect. */}

  }
  render() {
    return (
      <div>
        <div>
          <input type='text' value={this.state.name} onChange={e => { this.setState({ name: e.target.value }) }} />
        </div>
        <div>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click {this.state.count} times</button>
        </div>
      </div>
    )
  }
}

export default ClassCounterOne
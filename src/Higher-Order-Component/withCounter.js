import React from "react"
// This is how work HOC  will apply same fucntionality in ClickCounter.js and HoverCounter.js 
const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber }
            })
        }
        render() {
            console.log(this.props.name)
            // in WrappedComponent if will do  {this.props.name} it will not print then we need to use {...this.props.name} split operator
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {... this.props}/>
        }
    }
    return WithCounter
}

export default withCounter
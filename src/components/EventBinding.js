import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
      this.clickHandler = this.clickHandler.bind(this)
    }
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
          {/* <button onClick={ () => this.clickHandler()}>click</button> */}
          {/* <button onClick={this.clickHandler}>click</button> */}
          <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }

  clickHandler() {
      this.setState({
          message: 'GoodBye'
      })
  }

//   clickHandler = () => {
//       this.setState({
//           message: 'Goodbye'
//       })
//   }
}

export default EventBinding
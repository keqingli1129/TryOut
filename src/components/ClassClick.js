import React, { Component } from 'react'

class ClassClick extends Component {
  render() {
    return (
      <div><button onClick={this.clickHandler}>ClassClick</button></div>
    )
  }

  clickHandler() {
      console.log('Click the button')
  }
}

export default ClassClick
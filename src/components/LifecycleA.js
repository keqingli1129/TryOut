import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Keqing'
    }
    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }

  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate')
  }
    render() {
        console.log('LifecycleA render')
        return (
            <div>
              <div>Lifecycle A</div>
              <button onClick={this.changeState}>Change state</button>
                <LifecycleB></LifecycleB>
            </div>
        )
  }

  componentDidMount() {
    console.log('LifecycleA componentDidMount')
  }

  changeState = () => {
    this.setState({
      name: 'Li'
    })
  }
}

export default LifecycleA
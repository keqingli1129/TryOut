import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'


class ParentComp extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           name: 'Keqing'
        }
      }

      componentDidMount() {
          setInterval(() => {
              this.setState({
                name : 'Li Keqing'
              })
            }, 2000)
      }

  render() {
      console.log('Parent comp')
    return (
      <div>
            {/* <PureComp name= {this.state.name}></PureComp>
            <RegComp name= {this.state.name}></RegComp> */}
            <MemoComp name = {this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParentComp
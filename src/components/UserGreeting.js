import React, { Component } from 'react'

class UserGreeting extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    render() {
        // if(this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Keqing
        //         </div>
        //     )
            
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
        // let message
        // if(this.state.isLoggedIn) {
        //     message = 'Hello Keqing'
        // }
        // else {
        //     message = 'Hello Guest'
        // }

        // return <div>{message}</div>
        // return  (
        //     this.state.isLoggedIn ? <div>Welcome Keqing</div> : <div>Welcome Guest</div>
        // )
        return this.state.isLoggedIn && <div>Welcome Keqing</div>

    // return (
    //     <div>
    //         <div>
    //             Welcome Keqing
    //         </div>
    //         <div>
    //             Welcome Guest
    //         </div>
    //     </div>

    // )
  }
}

export default UserGreeting
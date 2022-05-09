import React from 'react'

// function Greet() {
//     return<h1>Hello Keqing</h1>
// }

const Greet = (props) => {
    console.log(props)
    return (
       <div><h1>hello {props.name} a.k.a {props.heroname}</h1><h2>my cd test</h2>
       {props.children}
       </div>
       
    )
}



export default Greet
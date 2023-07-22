import React, { Component } from 'react'

export class Button extends Component {
    

  render() {
    return (

    //    <button>{this.props.name}</button>
       <div>
        <h1>Your Name is :{this.props.name}</h1>
        <h2>Your Age is :{this.props.age}</h2>

       </div>
    
    );
  }
}

export default Button
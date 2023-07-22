import React, { Component } from 'react'

export class Data extends Component {
     
    constructor(){

        super()
        this.state={
           
        
            Frieand:['Alaina','Arwa','Shrooq']
        }
    }



  render() {
    return (

        <>
        <ul>

            {this.state.Frieand.map((c)=> <li>{c}</li>)}

        </ul>
         </>
     
    )
  }
}

export default Data
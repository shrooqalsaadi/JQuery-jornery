import React, { Component } from 'react'
import Person from './Person'
import img1 from '../img1.jpg'


export class Home extends Component {
  render() {
    return (
        <>
        
        <Person img={img1} />
        <div className='doats-frame'>
        <div className='dot'></div>    
        </div>
        </>
    )
  }
}

export default Home
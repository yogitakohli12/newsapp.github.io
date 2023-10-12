import React, { Component } from 'react'
import Rhombus from './Rhombus.gif'
export default class loading extends Component {
  render() {
    return (
      <div className='text-center py-3'>
        <img src={Rhombus} alt="Rhombus" />
      </div>
    )
  }
}

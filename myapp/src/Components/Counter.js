import React, { Component } from 'react'
import UpdatedComp from './HighOrder'

export class Counter extends Component {
constructor(props) {
  super(props)

  this.state = {
     counter : 0
  }
}
ByMouseClick = ()=>
{
    this.setState({ counter : this.state.counter + 1});
}
  render() {
    const {counter} = this.state;
    return (
      <div>
      <button onMouseEnter={this.ByMouseClick}>{this.props.name}button clicked {counter}</button>
      </div>
    )
  }
}

export default UpdatedComp(Counter)
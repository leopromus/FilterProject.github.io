import React, { Component } from 'react'
import UpdatedComp from './HighOrder'

export class Click extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    updateClick = () =>
    {
        this.setState({count: this.state.count + 1});
    }
  render() {

    const {count} = this.state;
    return (  
      <div>
      <button onClick={this.updateClick}>{this.props.name}button clicked {count}</button>
    
      </div>
      )
  }
}

export default UpdatedComp(Click)
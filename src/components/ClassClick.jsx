import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log('Class Button Clicked');
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click CLass Button</button>
      </div>
    )
  }
}

export default ClassClick;

import React, { Component } from 'react'

export class User extends Component {
  render() {
    // const {name}= this.props
    return (
      <div>
        {this.props.name(true)}
      </div>
    )
  }
}

export default User

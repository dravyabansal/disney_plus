import React, { Component } from "react";

export class UserGreet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {

//----------------Preferaable----
    // Approach 3::::: By using Ternary conditional method
                // return this.state.isLoggedIn ? (
                // <div>Welcome Shruti</div>
                // ) : (
                // <div>Welcome User</div>
                // );


//----------------Preferaable----
    // Approach 2::: By using element method
                // let message;
                // if (this.state.isLoggedIn) {
                // message = <div>Welcome Shruti</div>;
                // } else {
                // message = <div>Welcome User</div>;
                // }
                // return <div>{message}</div>

    // Approach 1:::: By using standard if else statements
                if (this.state.isLoggedIn) {
                  return <div>Welcome Shruti</div>;
                } else {
                  return <div>Welcome User</div>;
                }
  }
}

export default UserGreet;

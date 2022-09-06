import React, { Component } from "react";

export class Message extends Component {
  constructor() {
    super();
    //------State Objects
    this.state = {
      message: "Welcome Visitor",
    //  ------- Won't work===> newMessage:"Thanks for subscribe"
    };
  }
//---------Constructor
  changeMessage(){
    this.setState({
        message:"Thanks for subscribe"
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Subscribe </button>
      </div>
      //   <button></button>
    );
  }
}

export default Message;

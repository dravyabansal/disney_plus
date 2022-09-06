import React, { Component } from 'react'

export class EVentBind extends Component {
    constructor(props){
        super(props);
        this.state=({
            message:'hello'
        })
    }
    // clickHandler(){

        
    //     this.setState=({
    //         message:'Welcome to the World of The SHs'
    //     })
    //     console.log(this);
    // }


    clickHandler=()=>{
        this.setState({
            message:'Welcome to the World of The SHs'
        })
    }
  render() {
    return (
      <div>{this.state.message}
        {/* <button onClick={this.clickHandler.bind(this)}> Click</button> */}
        <button onClick={()=>this.clickHandler}> Click</button>
      </div>
    )
  }
}

export default EVentBind

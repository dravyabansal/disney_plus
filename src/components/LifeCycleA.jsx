import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "doremolls",
    };
    console.log("LifeCycleA constructor");
  }
  static getDerivedStateFromProps(props) {
    console.log("lifeCycleA getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log('lifeCycleA render');
    return  <LifeCycleB/>;
       
  }

  componentDidMount(){
    console.log('lifeCycleA componentDidMount');
  }
}

export default LifeCycleA;

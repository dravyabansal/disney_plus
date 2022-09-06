import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "react",
    };
  }
  handleOnChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleOnCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value
    });
  };
  handleSubmit = (event) => {
    alert(
      `Name :${this.state.username} Shared: ${this.state.comment} Courses:${this.state.topic} `
    );
    event.preventDefault();
  };

  render() {
    const {username, comment, topic}  = this.state 
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Form Component (via Class)
          <label htmlFor="">UserName</label>
          <input
            type="text"
            value={username}
            onChange={this.handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="">Comment</label>
          <textarea
            cols="80"
            rows="10"
            value={comment}
            onChange={this.handleOnCommentChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="">Topic</label>
          <select value={topic} onChanage={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <button /* onClick={} */>Submit</button>
      </form>
    );
  }
}

export default Form;

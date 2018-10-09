import React, { Component } from 'react';

export default class Task30 extends Component {
  state = { value: '', message: '' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = () => {
    this.setState({
      message: this.state.value,
      value: '',
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

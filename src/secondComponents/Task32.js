import React, { Component } from 'react';

export default class Task32 extends Component {
  state = { first: '', second: '', third: '', message: '' };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const { first, second, third } = this.state;
    this.setState({
      message: `Hello ${first} ${second} ${third}!`,
      first: '',
      second: '',
      third: '',
    });
  };

  render() {
    const { first, second, third, message } = this.state;
    return (
      <div>
        <input
          type="text"
          name="first"
          value={first}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="second"
          value={second}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="third"
          value={third}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Send</button>
        <p>{message}</p>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './Task61.css';

export default class Task61 extends Component {
  state = { input: '' };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  checkValid = () => {
    const { input } = this.state;
    return input.length > 3 && input.length < 10;
  };

  render() {
    const { input } = this.state;
    const className = this.checkValid() ? 'valid' : 'danger';
    return (
      <input
        type="text"
        value={input}
        onChange={this.handleChange}
        className={className}
      />
    );
  }
}

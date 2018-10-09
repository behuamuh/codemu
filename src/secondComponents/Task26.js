import React, { Component } from 'react';

export default class Task26 extends Component {
  state = { value: '' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          name="text"
          value={this.state.value}
        />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

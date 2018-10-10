import React, { Component } from 'react';

export default class Task43 extends Component {
  state = { value: '0' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          name="group"
          type="radio"
          value="0"
          checked={this.state.value === '0'}
          onChange={this.handleChange}
        />
        <input
          name="group"
          type="radio"
          value="1"
          checked={this.state.value === '1'}
          onChange={this.handleChange}
        />
        <input
          name="group"
          type="radio"
          value="2"
          checked={this.state.value === '2'}
          onChange={this.handleChange}
        />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

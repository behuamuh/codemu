import React, { Component } from 'react';

export default class Task41 extends Component {
  state = { value: '' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <select onChange={this.handleChange} value={this.state.value}>
          <option>Moscow</option>
          <option>Kiev</option>
          <option>Piter</option>
          <option>Oslo</option>
        </select>
        <p>{this.state.value}</p>
      </div>
    );
  }
}

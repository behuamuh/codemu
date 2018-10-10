import React, { Component } from 'react';

export default class Task45 extends Component {
  state = { colors: ['green', 'white', 'red', 'yellow'], value: '0' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { colors, value } = this.state;
    const options = colors.map((color, index) => {
      return (
        <option key={index} value={index}>
          {color}
        </option>
      );
    });
    return (
      <div>
        <select onChange={this.handleChange} value={value}>
          {options}
        </select>
        <p style={{ background: colors[value] }}>Lorem ipsum dolor</p>
      </div>
    );
  }
}

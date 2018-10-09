import React, { Component } from 'react';

export default class Task28 extends Component {
  state = { value: 0 };

  handleChange = event => {
    this.setState({ value: +event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.value}
          max={150}
          min={0}
          onChange={this.handleChange}
        />
        <p> Вы родились в {new Date().getFullYear() - this.state.value} году</p>
      </div>
    );
  }
}

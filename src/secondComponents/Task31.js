import React, { Component } from 'react';

export default class Task31 extends Component {
  state = { value1: 0, value2: 0, result: 0 };

  handleChange = event => {
    this.setState({
      [event.target.name]: +event.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({ result: this.state.value1 + this.state.value2 });
  };

  render() {
    const { value1, value2, result } = this.state;
    return (
      <div>
        <input
          type="number"
          name="value1"
          onChange={this.handleChange}
          value={value1}
        />
        <input
          type="number"
          name="value2"
          onChange={this.handleChange}
          value={value2}
        />
        <button onClick={this.handleSubmit}>Get summ</button>
        <p>{result}</p>
      </div>
    );
  }
}

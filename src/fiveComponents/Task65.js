import React, { Component } from 'react';

export default class Task65 extends Component {
  state = {
    currents: [
      { current: 'USD', value: 67.81 },
      { current: 'EUR', value: 78.12 },
      { current: 'GBP', value: 89.37 },
      { current: 'CHF', value: 68.53 },
      { current: 'RUB', value: 1 },
      { current: 'JPY', value: 0.59 },
    ],
    inCurrent: 'USD',
    toCurrent: 'RUB',
    input: '',
    result: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  getValue = () => {
    const { currents, inCurrent, toCurrent, input } = this.state;
    const inVal = +input;
    // eslint-disable-next-line
    if (inVal !== inVal) {
      alert('Incorrect number');
      return;
    }
    const result =
      (currents.find(current => current.current === inCurrent).value * inVal) /
      currents.find(current => current.current === toCurrent).value;
    this.setState({ result });
  };

  render() {
    const { currents, inCurrent, toCurrent, input, result } = this.state;
    const list = currents.map(current => {
      return <option key={current.current}>{current.current}</option>;
    });
    return (
      <div>
        <input
          name="input"
          type="text"
          value={input}
          onChange={this.handleChange}
        />
        in
        <select name="inCurrent" value={inCurrent} onChange={this.handleChange}>
          {list}
        </select>
        to
        <select name="toCurrent" value={toCurrent} onChange={this.handleChange}>
          {list}
        </select>
        <button onClick={this.getValue}>Check</button>
        <p>{result}</p>
      </div>
    );
  }
}

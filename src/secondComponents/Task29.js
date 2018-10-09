import React, { Component } from 'react';

export default class Task29 extends Component {
  state = { value: '' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;
    const [first, second, third] = value.split(' ');
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <p>{first}</p>
        <p>{second}</p>
        <p>{third}</p>
      </div>
    );
  }
}

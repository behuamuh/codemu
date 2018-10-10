import React, { Component } from 'react';

export default class Task47 extends Component {
  state = { value: '0' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <select value={value} onChange={this.handleChange}>
          <option value="0">Block1</option>
          <option value="1">Block2</option>
          <option value="2">Block3</option>
        </select>
        <p style={{ display: value === '0' ? 'block' : 'none' }}>Paragraph 1</p>
        <p style={{ display: value === '1' ? 'block' : 'none' }}>Paragraph 2</p>
        <p style={{ display: value === '2' ? 'block' : 'none' }}>Paragraph 3</p>
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class Task46 extends Component {
  state = { value: 'unchecked' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <select value={value} onChange={this.handleChange}>
          <option value="unchecked">Unchecked</option>
          <option value="checked">Checked</option>
        </select>
        <input type="checkbox" checked={value === 'checked'} />
      </div>
    );
  }
}

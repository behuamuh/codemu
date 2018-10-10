import React, { Component } from 'react';

export default class Task49 extends Component {
  state = { checked: false };

  handleChange = event => {
    this.setState({
      checked: event.target.checked,
    });
  };

  render() {
    const { checked } = this.state;
    return (
      <div>
        <input type="checkbox" checked={checked} onChange={this.handleChange} />
        <input type="text" disabled={!checked} />
      </div>
    );
  }
}

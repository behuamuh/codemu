import React, { Component } from 'react';

export default class Task39 extends Component {
  state = { checked: false };

  handleChange = event => {
    this.setState({ checked: event.target.checked });
  };

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        <p>{this.state.checked ? 'Checked' : 'Unchecked'}</p>
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class Task38 extends Component {
  state = { text: '' };

  handleChange = event => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <textarea value={this.state.text} onChange={this.handleChange} />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

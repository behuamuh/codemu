import React, { Component } from 'react';

export default class Task40 extends Component {
  state = { checked: false };

  handleChange = event => {
    this.setState({ checked: event.target.checked });
  };

  render() {
    const { checked } = this.state;
    const content = checked ? <p>This is sometext</p> : null;

    return (
      <div>
        <input type="checkbox" checked={checked} onChange={this.handleChange} />
        {content}
      </div>
    );
  }
}
